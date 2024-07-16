import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mouse-power-rules")
export class Rules extends LitElement {
  static styles = css``;

  constructor() {
    super();
  }

  render() {
    return html`<p>Lorem Ipsum</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mouse-power-rules": Rules;
  }
}
