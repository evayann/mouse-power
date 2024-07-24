import { ReactiveControllerHost } from "lit";
import { Cursor } from "../models/cursor.type.js";

export class BonusController {
  #host: ReactiveControllerHost;
  #autoCursorList: Cursor[] = [];

  get autoCursorList(): readonly Cursor[] {
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

  upgradeAutoCursor(): void {
    const autoCursorList = [...this.#autoCursorList];
    const firstAutoCursor = autoCursorList.shift();
    if (!firstAutoCursor) return;

    const lowestAutoCursorAndIndex = autoCursorList.reduce<{
      autoCursor: Cursor;
      index: number;
    }>(
      (lowestAutoCursor, currentAutoCursor, index) =>
        lowestAutoCursor.autoCursor.level > currentAutoCursor.level
          ? { index: index + 1, autoCursor: currentAutoCursor }
          : lowestAutoCursor,
      { autoCursor: firstAutoCursor, index: 0 }
    );
    const newAutoCursor = {
      ...lowestAutoCursorAndIndex.autoCursor,
      level: lowestAutoCursorAndIndex.autoCursor.level + 1,
    };

    this.#autoCursorList = this.#autoCursorList.toSpliced(
      lowestAutoCursorAndIndex.index,
      1,
      newAutoCursor
    );
  }
}
