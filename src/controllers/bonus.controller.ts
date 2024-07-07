import { ReactiveControllerHost } from "lit";

export class BonusController {
  #host: ReactiveControllerHost;
  #autoCursorList: { speed: number }[] = [];

  get autoCursorList(): readonly { speed: number }[] {
    return this.#autoCursorList;
  }

  constructor(host: ReactiveControllerHost) {
    this.#host = host;
    host.addController(this as any);
  }

  addNewAutoCursor(): void {
    this.#autoCursorList.push({ speed: 2 });
    this.#host.requestUpdate();
  }
}
