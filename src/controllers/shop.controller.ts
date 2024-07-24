import { ReactiveControllerHost } from "lit";
import { ShopItem } from "../classes/item.js";
import { Item, ItemName } from "../models/item.type.js";
import { NumberValue } from "../classes/number-value.js";

export class ShopController {
  #items: Record<ItemName, Item> = {
    "auto-cursor": ShopItem.create(1.1, 10),
    "auto-cursor-level": ShopItem.create(1.5, 20),
  };

  #host: ReactiveControllerHost;
  #shiftModifier = false;
  #nbItemIfModifier = 10;

  #onKeyDownListener = (event: KeyboardEvent) => this.#onKeyDown(event);
  #onKeyUpListener = (event: KeyboardEvent) => this.#onKeyUp(event);

  get itemList(): {
    name: ItemName;
    nbItem: number;
    cost: NumberValue | undefined;
  }[] {
    return Object.entries(this.#items).map(([name, item]) => ({
      name: name as ItemName,
      nbItem: this.#shiftModifier ? this.#nbItemIfModifier : 1,
      cost: this.#shiftModifier
        ? item.xNextCost(this.#nbItemIfModifier)
        : item.nextCost,
    }));
  }

  constructor(host: ReactiveControllerHost) {
    this.#host = host;
    host.addController(this as any);
  }

  hostConnected(): void {
    window.addEventListener("keydown", this.#onKeyDownListener);
    window.addEventListener("keyup", this.#onKeyUpListener);
  }

  hostDisconnected(): void {
    window.removeEventListener("keydown", this.#onKeyDownListener);
    window.removeEventListener("keyup", this.#onKeyUpListener);
  }

  buy(itemName: ItemName): number {
    const item = this.#items[itemName];

    Array.from({
      length: this.#shiftModifier ? this.#nbItemIfModifier : 1,
    }).forEach(() => item.buy());

    this.#host.requestUpdate();
    return this.#shiftModifier ? this.#nbItemIfModifier : 1;
  }

  nextCostOf(itemName: ItemName): NumberValue | undefined {
    const item = this.#items[itemName];

    return this.#shiftModifier
      ? item.xNextCost(this.#nbItemIfModifier)
      : item.nextCost;
  }

  #onKeyDown(event: KeyboardEvent): void {
    if (event.shiftKey) {
      this.#shiftModifier = true;
      this.#host.requestUpdate();
    }
  }

  #onKeyUp(event: KeyboardEvent): void {
    if (!event.shiftKey) {
      this.#shiftModifier = false;
      this.#host.requestUpdate();
    }
  }
}
