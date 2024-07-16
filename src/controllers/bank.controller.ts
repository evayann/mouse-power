import { ReactiveControllerHost } from "lit";
import { MoneyCreated } from "../models/score.type.js";
import { Bank } from "../classes/bank.js";
import { NumberValue } from "../classes/number-value.js";

export class BankController {
  private static COUNTER = 0;

  get sold(): NumberValue {
    return new NumberValue(this.#bank.sold);
  }

  get interest(): NumberValue {
    return new NumberValue(this.#bank.interest, 2);
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

  constructor(host: ReactiveControllerHost) {
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
    this.#bank.cashInInterest();
    this.#host.requestUpdate();
  }

  cashIn(id: string): void {
    const { [id]: moneyCreated, ...otherScore } = this.#moneysCreated;
    this.#moneysCreated = { ...otherScore };
    this.#bank.cashIn(moneyCreated.value.raw);
    this.#host.requestUpdate();
  }
}
