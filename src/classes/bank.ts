import { NumberValue } from "./number-value.js";

export class Bank {
  #intersetRatio = 0;
  #money = 0;

  #interestAddByIncrement = 0.0001;
  #moneyCreated = 0;
  #moneyCreationFactor = 0.01;

  get sold(): number {
    return this.#money;
  }

  get interestRatio(): number {
    return this.#intersetRatio;
  }

  createMoney(multiplicator: number): NumberValue {
    return new NumberValue(
      Math.log(
        (this.#moneyCreated += this.#moneyCreationFactor * multiplicator + 1)
      ) + 1
    );
  }

  cashIn(money: number): void {
    this.#money += money;
  }

  cashInInterest(): number {
    const interest = this.#money * this.#intersetRatio;
    this.#money += interest;
    return interest;
  }

  cashOut(money: number): void {
    const newSold = this.#money - money;
    if (newSold < 0) return;
    this.#money = newSold;
  }

  incrementInterest(): void {
    this.#intersetRatio = Math.min(
      2,
      this.#intersetRatio + this.#interestAddByIncrement
    );
  }

  resetInterest(): void {
    this.#intersetRatio = 0;
  }
}
