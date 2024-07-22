import { ReactiveControllerHost } from "lit";

export class BonusController {
  #host: ReactiveControllerHost;
  #autoCursorList: { level: number }[] = [];

  get autoCursorList(): readonly { level: number }[] {
    return this.#autoCursorList;
  }

  constructor(host: ReactiveControllerHost) {
    this.#host = host;
    host.addController(this as any);
  }

  addNewAutoCursor(): void {
    this.#autoCursorList = [...this.#autoCursorList, { level: 1 }];
    this.#host.requestUpdate();
  }
}
