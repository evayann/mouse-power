import { ReactiveControllerHost } from "lit";
import { MoneyCreated } from "../models/score.type.js";
import { Bank } from "../classes/game-score-counter.js";

export class BankController {
  private static SCORE_ID_COUNTER = 0;

  get sold(): number {
    return this.#bank.sold;
  }

  get interest(): number {
    return this.#bank.interest;
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
      [BankController.SCORE_ID_COUNTER++]: {
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
    const { [id]: score, ...otherScore } = this.#moneysCreated;
    this.#moneysCreated = { ...otherScore };
    this.#bank.cashIn(score.value);
    this.#host.requestUpdate();
  }
}
