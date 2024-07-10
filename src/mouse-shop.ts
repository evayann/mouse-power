import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { ItemName, allItemNameList } from "./models/item.type.js";

@customElement("mouse-shop")
export class MouseShop extends LitElement {
  @property({ type: Number }) currentMoney!: number;
  @property({ type: Array }) itemList: {
    name: ItemName;
    cost: number | undefined;
  }[] = [];

  static styles = css``;

  get #allNextCost(): number {
    return this.itemList.reduce((acc, { cost }) => acc + (cost ?? 0), 0);
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
                  .disabled="${cost === undefined || cost > this.currentMoney}"
                  @click=${(event: Event) => {
                    event.stopPropagation();
                    this.buyItem(name);
                  }}
                >
                  ${cost ? `$${cost}` : "No more upgrade"}
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
                .disabled="${this.#allNextCost === 0 ||
                this.#allNextCost > this.currentMoney}"
                @click=${(event: Event) => {
                  event.stopPropagation();
                  this.buyAllItem();
                }}
              >
                ${this.#allNextCost !== 0
                  ? `$${this.#allNextCost}`
                  : "No more upgrade"}
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
