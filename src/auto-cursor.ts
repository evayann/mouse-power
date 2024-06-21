import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement("auto-cursor")
export class AutoCursor extends LitElement {
  @query("auto-cursor") cursor: any;
  static styles = css`
    :host {
      position: absolute;
      top: 50%;
      left: 20vw;
      transform-origin: calc(50vw - 20vw);
      animation: rotate-around-mouse var(--rotation-time, 5s) linear infinite;
    }

    @keyframes rotate-around-mouse {
      0% {
        rotate: 0deg;
      }
      100% {
        rotate: 360deg;
      }
    }

    p {
      margin: 0;
      animation: rotate-around-mouse var(--rotation-time, 5s) linear infinite
        reverse;
    }
  `;

  constructor() {
    super();
    setInterval(() => {
      this.dispatchEvent(
        new CustomEvent("add-score", {
          detail: {
            x: Math.random() * 20,
            y: Math.random() * 20,
          },
        })
      );
    }, 500);
  }

  render() {
    return html`<p>test</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "auto-cursor": AutoCursor;
  }
}
