import { ReactiveControllerHost } from "lit";
import { Score } from "../models/score.type.js";
import { GameScoreCounter } from "../classes/game-score-counter.js";

export class ScoreController {
  private static SCORE_ID_COUNTER = 0;
  host: ReactiveControllerHost;

  get value(): string {
    return this.#gameScoreCounter.value;
  }

  get multiplicator(): string {
    return this.#gameScoreCounter.multiplicator;
  }

  get scoreList(): [string, Score][] {
    return Object.entries(this.#scores);
  }

  #scores: Record<string, Score> = {};
  #gameScoreCounter = new GameScoreCounter();
  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this as any);
  }

  addScore(x: number, y: number): void {
    this.#scores = {
      ...this.#scores,
      [ScoreController.SCORE_ID_COUNTER++]: {
        value: this.#gameScoreCounter.newScore(),
        displayTimeInMs: 500 + Math.random() * 1000,
        startPosition: {
          x,
          y,
        },
      },
    };
  }

  removeScore(scoreId: string, scoreValue: number): void {
    const { [scoreId]: score, ...otherScore } = this.#scores;
    this.#scores = { ...otherScore };
    this.#gameScoreCounter.apply(scoreValue);
    this.host.requestUpdate();
  }
}
