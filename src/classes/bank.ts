import { NumberValue } from "./number-value.js";

export class Bank {
  #intersetRatio = 0;
  #money = 0;

  #nbMoneyCreated = 0;

  get sold(): number {
    return this.#money;
  }

  get interestRatio(): number {
    return this.#intersetRatio;
  }

  private get interestPercent(): number {
    return this.#intersetRatio / 100;
  }

  createMoney(): NumberValue {
    return new NumberValue(this.#nbMoneyCreated / 1000 + 1);
  }

  cashIn(money: number): void {
    this.#money += money;
    this.#nbMoneyCreated += 1_000_000;
  }

  cashInInterest(): void {
    this.#money += this.#money * this.interestPercent;
  }

  cashOut(money: number): void {
    const newSold = this.#money - money;
    if (newSold < 0) return;
    this.#money = newSold;
  }

  incrementInterest(): void {
    this.#intersetRatio += 0.0001;
  }

  resetInterest(): void {
    this.#intersetRatio = 0;
  }
}
