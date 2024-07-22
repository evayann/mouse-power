import { ReactiveControllerHost } from "lit";
import { NumberValue } from "../classes/number-value.js";

export class StatisticsController {
  #host: ReactiveControllerHost;
  #totalMoneyGain = 0;
  #totalInterestGain = 0;
  #mouseMovement = 0;
  #mouseClick = 0;
  #startTime = new Date();

  get totalMoneyGain(): NumberValue {
    return new NumberValue(this.#totalMoneyGain);
  }

  get totalInterestGain(): NumberValue {
    return new NumberValue(this.#totalInterestGain);
  }

  get playTime(): string {
    const now = new Date();
    return this.timerFormat(+now - +this.#startTime);
  }

  constructor(host: ReactiveControllerHost) {
    this.#host = host;
    host.addController(this as any);
  }

  addCashIn(cashGain: number): void {
    this.#totalMoneyGain += cashGain;
    this.#host.requestUpdate();
  }

  addInterestCash(cashGain: number): void {
    this.#totalInterestGain += cashGain;
    this.#host.requestUpdate();
  }

  addMouseClick(): void {
    this.#mouseClick++;
    this.#host.requestUpdate();
  }

  addMouseMovement(): void {
    this.#mouseMovement++;
    this.#host.requestUpdate();
  }

  private timerFormat(timeInMs: number): string {
    const timeInSeconds = Math.floor(timeInMs / 1000);
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
