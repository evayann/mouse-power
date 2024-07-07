import { ReactiveControllerHost } from "lit";
import { Timing } from "../classes/timing.js";

export class MouseEventController {
  host: ReactiveControllerHost;

  get isMoving(): boolean {
    return this.#isMoving;
  }
  get isScroll(): boolean {
    return this.#isScroll;
  }
  get isLeftClick(): boolean {
    return this.#isLeftClick;
  }
  get isRightClick(): boolean {
    return this.#isRightClick;
  }

  #isMoving = false;
  #isScroll = false;
  #isLeftClick = false;
  #isRightClick = false;

  #resetTimeInMs = 300;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this as any);
  }

  move(): void {
    this.#isMoving = true;
    this.host.requestUpdate();
    this.stopMovement();
  }

  private stopMovement = Timing.delayAndCleanIfExist(() => {
    this.#isMoving = false;
    this.host.requestUpdate();
  }, this.#resetTimeInMs);

  scroll(): void {
    this.#isScroll = true;
    this.host.requestUpdate();
    this.stopScroll();
  }

  private stopScroll = Timing.delayAndCleanIfExist(() => {
    this.#isScroll = false;
    this.host.requestUpdate();
  }, this.#resetTimeInMs);

  leftClick(): void {
    this.#isLeftClick = true;
    this.host.requestUpdate();
    this.stopLeftClick();
  }

  private stopLeftClick = Timing.delayAndCleanIfExist(() => {
    this.#isLeftClick = false;
    this.host.requestUpdate();
  }, this.#resetTimeInMs);

  rightClick(): void {
    this.#isRightClick = true;
    this.host.requestUpdate();
    this.stopRightClick();
  }

  private stopRightClick = Timing.delayAndCleanIfExist(() => {
    this.#isRightClick = false;
    this.host.requestUpdate();
  }, this.#resetTimeInMs);
}
