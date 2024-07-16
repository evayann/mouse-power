import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mouse-menu")
export class Menu extends LitElement {
  @property({ type: Boolean }) isOpen!: boolean;
  static styles = css``;

  constructor() {
    super();
  }

  render() {
    return html`<dialog id="menu-dialog" ?open="${this.isOpen}">
      <label> Theme dark <input type="checkbox" /></label>
      <label> Scientific notation <input type="checkbox" /></label>
      <p>By Yann Zavattero</p>
    </dialog>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mouse-menu": Menu;
  }
}
