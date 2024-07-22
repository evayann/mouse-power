import { ReactiveControllerHost } from "lit";
import { MoneyCreated } from "../models/score.type.js";
import { Bank } from "../classes/bank.js";
import { NumberValue } from "../classes/number-value.js";
import { StatisticsController } from "./statistics.controller.js";

export class BankController {
  private static COUNTER = 0;

  get sold(): NumberValue {
    return new NumberValue(this.#bank.sold);
  }

  get interest(): NumberValue {
    return new NumberValue(this.#bank.interestRatio * 100, {
      notation: "percentage",
      precision: 2,
    });
  }

  get moneyPopUpList(): { id: string; moneyCreated: MoneyCreated }[] {
    return Object.entries(this.#moneysCreated).map(([id, moneyCreated]) => ({
      id,
      moneyCreated,
    }));
  }

  #host: ReactiveControllerHost;
  #moneysCreated: Record<string, MoneyCreated> = {};
  #bank = new Bank();

  constructor(
    host: ReactiveControllerHost,
    private statisticsController: StatisticsController
  ) {
    this.#host = host;
    host.addController(this as any);
  }

  incrementInterest(): void {
    this.#bank.incrementInterest();
    this.#host.requestUpdate();
  }

  resetInterest(): void {
    this.#bank.resetInterest();
    this.#host.requestUpdate();
  }

  createMoney(x: number, y: number): void {
    this.#moneysCreated = {
      ...this.#moneysCreated,
      [BankController.COUNTER++]: {
        value: this.#bank.createMoney(),
        displayTimeInMs: Math.round(500 + Math.random() * 1000),
        startPosition: {
          x,
          y,
        },
      },
    };
    this.#host.requestUpdate();
  }

  cashInInterest(): void {
    const interest = this.#bank.cashInInterest();
    this.statisticsController.addInterestCash(interest);
    this.#host.requestUpdate();
  }

  cashIn(id: string): void {
    const { [id]: moneyCreated, ...otherScore } = this.#moneysCreated;
    const moneyGain = moneyCreated.value.raw;
    this.#moneysCreated = { ...otherScore };
    this.#bank.cashIn(moneyGain);
    this.statisticsController.addCashIn(moneyGain);
    this.#host.requestUpdate();
  }
}
