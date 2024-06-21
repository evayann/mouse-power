import { ReactiveControllerHost } from "lit";

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

  private stopMovement = this.resetPropertyAfter(() => {
    this.#isMoving = false;
    this.host.requestUpdate();
  }, this.#resetTimeInMs);

  scroll(): void {
    this.#isScroll = true;
    this.host.requestUpdate();
    this.stopScroll();
  }

  private stopScroll = this.resetPropertyAfter(() => {
    this.#isScroll = false;
    this.host.requestUpdate();
  }, this.#resetTimeInMs);

  leftClick(): void {
    this.#isLeftClick = true;
    this.host.requestUpdate();
    this.stopLeftClick();
  }

  private stopLeftClick = this.resetPropertyAfter(() => {
    this.#isLeftClick = false;
    this.host.requestUpdate();
  }, this.#resetTimeInMs);

  rightClick(): void {
    this.#isRightClick = true;
    this.host.requestUpdate();
    this.stopRightClick();
  }

  private stopRightClick = this.resetPropertyAfter(() => {
    this.#isRightClick = false;
    this.host.requestUpdate();
  }, this.#resetTimeInMs);

  private resetPropertyAfter(resetFunction: () => void, timeInMs: number) {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return (): void => {
      if (timer) {
        clearTimeout(timer);
        timer = undefined;
      }

      timer = this.delay(resetFunction, timeInMs);
    };
  }

  private delay(
    fct: Function,
    timeInMs: number
  ): ReturnType<typeof setTimeout> {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      fct();
      clearTimeout(timer);
    }, timeInMs);

    return timer;
  }
}
