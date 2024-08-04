import { ReactiveControllerHost } from "lit";
import { NumberValue } from "../classes/number-value.js";
import { Item, ItemName } from "../models/item.type.js";

export class ShopController {
  #items: Record<ItemName, Item>;
  #host: ReactiveControllerHost;
  #shiftModifier = false;
  #nbItemIfModifier = 10;

  #onKeyDownListener = (event: KeyboardEvent) => this.#onKeyDown(event);
  #onKeyUpListener = (event: KeyboardEvent) => this.#onKeyUp(event);

  get itemList(): {
    name: ItemName;
    costToFirstDisplay: NumberValue;
    cost: NumberValue | undefined;
  }[] {
    return Object.entries(this.#items).map(([name, item]) => ({
      name: name as ItemName,
      costToFirstDisplay: item.firstCost(),
      cost: this.#shiftModifier
        ? item.xNextCost(this.#nbItemIfModifier)
        : item.nextCost,
    }));
  }

  constructor(host: ReactiveControllerHost, items: Record<ItemName, Item>) {
    this.#host = host;
    this.#items = items;
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

    const nbItemToBuy = Math.min(
      this.#shiftModifier ? this.#nbItemIfModifier : 1,
      item.nbUpgradeAvaible
    );

    Array.from({
      length: nbItemToBuy,
    }).forEach(() => item.buy());

    this.#host.requestUpdate();
    return nbItemToBuy;
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
