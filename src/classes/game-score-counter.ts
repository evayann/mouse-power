export class GameScoreCounter {
  #multiplicator = 1;
  #score = 0;

  #nbApply = 0;
  #displayPrecision = 2;

  get value(): string {
    return this.#score.toFixed(this.#displayPrecision);
  }

  get multiplicator(): string {
    return this.#multiplicator.toFixed(this.#displayPrecision);
  }

  newScore(): number {
    return this.#nbApply + 1;
  }

  apply(score: number): void {
    this.#score += score * this.#multiplicator;
    this.#nbApply++;
  }

  incrementMultiplicator(): void {
    this.#multiplicator += 0.1;
  }

  resetMultiplicator(): void {
    this.#multiplicator = 1;
  }
}
