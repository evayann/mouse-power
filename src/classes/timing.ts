export class Timing {
  static delay(fct: Function, timeInMs: number): ReturnType<typeof setTimeout> {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      fct();
      clearTimeout(timer);
    }, timeInMs);

    return timer;
  }

  static delayAndCleanIfExist(fct: Function, timeInMs: number) {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return (): void => {
      if (timer) {
        clearTimeout(timer);
        timer = undefined;
      }

      timer = this.delay(fct, timeInMs);
    };
  }

  static debounce(fct: Function, timeInMs: number) {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return (...args: unknown[]) => {
      if (timer) return;

      timer = setTimeout(() => {
        fct.apply(this, args);
        clearTimeout(timer);
        timer = undefined;
      }, timeInMs);
    };
  }
}
