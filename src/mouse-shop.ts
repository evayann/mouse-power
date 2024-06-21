import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mouse-shop")
export class MouseShop extends LitElement {
  static styles = css``;

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
          <tr>
            <th scope="row">Cursor</th>
            <td>
              <button class="btn-shop" .click=${() => this.addAutoCursor()}>
                1$
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">Dennis</th>
            <td><button class="btn-shop">Cost</button></td>
          </tr>
          <tr>
            <th scope="row">Sarah</th>
            <td><button class="btn-shop">Cost</button></td>
          </tr>
          <tr>
            <th scope="row">Karen</th>
            <td><button class="btn-shop">Cost</button></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">All</th>
            <td><button class="btn-shop">Cost</button></td>
          </tr>
        </tfoot>
      </table>
    `;
  }

  addAutoCursor(): void {}
}

declare global {
  interface HTMLElementTagNameMap {
    "mouse-shop": MouseShop;
  }
}
