import { NumberValue } from "./number-value.js";

export class Bank {
  #interset = 1;
  #money = 0;

  #nbMoneyCreated = 0;

  get sold(): number {
    return this.#money;
  }

  get interest(): number {
    return this.#interset;
  }

  createMoney(): NumberValue {
    return new NumberValue(this.#nbMoneyCreated / 1000 + 1);
  }

  cashIn(money: number): void {
    this.#money += money;
    this.#nbMoneyCreated += 1_000_000;
  }

  cashInInterest(): void {
    this.#money *= this.#interset;
  }

  cashOut(money: number): void {
    const newSold = this.#money - money;
    if (newSold < 0) return;
    this.#money = newSold;
  }

  incrementInterest(): void {
    this.#interset += 0.1;
  }

  resetInterest(): void {
    this.#interset = 1;
  }
}
