import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { ItemName, allItemNameList } from "./models/item.type.js";
import { NumberValue } from "./classes/number-value.js";

@customElement("mouse-shop")
export class MouseShop extends LitElement {
  @property({ type: Object }) currentMoney!: NumberValue;
  @property({ type: Array }) itemList: {
    name: ItemName;
    cost: NumberValue | undefined;
  }[] = [];

  static styles = css``;

  get #allNextCost(): NumberValue {
    return this.itemList.reduce(
      (acc, { cost }) => acc.add(cost ?? 0),
      new NumberValue(0)
    );
  }

  render() {
    return html`
      <table>
        <caption>
          Shop
        </caption>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          ${this.itemList.map(
            ({ name, cost }) => html`<tr>
              <th scope="row">${name}</th>
              <td>
                <button
                  class="btn-shop"
                  .disabled="${cost === undefined ||
                  this.currentMoney.isLowerThan(cost)}"
                  @click=${(event: Event) => {
                    event.stopPropagation();
                    this.buyItem(name);
                  }}
                >
                  ${cost ? `$${cost.display}` : "No more upgrade"}
                </button>
              </td>
            </tr>`
          )}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">All</th>
            <td>
              <button
                class="btn-shop"
                .disabled="${this.#allNextCost.isZero ||
                this.currentMoney.isLowerThan(this.#allNextCost)}"
                this.#allNextCost
                @click=${(event: Event) => {
                  event.stopPropagation();
                  this.buyAllItem();
                }}
              >
                ${this.#allNextCost.isZero
                  ? "No more upgrade"
                  : `$${this.#allNextCost.display}`}
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    `;
  }

  private buyItem(itemName: ItemName): void {
    this.dispatchEvent(new CustomEvent("buy", { detail: { name: itemName } }));
  }

  private buyAllItem(): void {
    allItemNameList.forEach((itemName) => this.buyItem(itemName));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mouse-shop": MouseShop;
  }
}
