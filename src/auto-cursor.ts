import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement("auto-cursor")
export class AutoCursor extends LitElement {
  @query(".cursor") cursor!: HTMLElement;

  static styles = css`
    :host {
      --radius: 200px;
      --one-rotation: 5s;
      position: absolute;
      top: 50%;
      left: calc(50% - var(--radius));
      transform-origin: var(--radius);
      animation: rotate-around-mouse var(--rotation-time, var(--one-rotation))
        linear infinite;
      will-change: transform;
    }

    @keyframes rotate-around-mouse {
      0% {
        rotate: 0deg;
      }
      100% {
        rotate: 360deg;
      }
    }

    .cursor {
      width: 100%;
      animation: rotate-around-mouse var(--rotation-time, var(--one-rotation))
        linear infinite reverse;
    }
  `;

  #createNewScoreIntervalInMs = 500;

  constructor() {
    super();

    setInterval(() => {
      const { top, left, width, height } = this.cursor.getBoundingClientRect();
      this.dispatchEvent(
        new CustomEvent("add-score", {
          detail: {
            x: Math.round(left + width / 2),
            y: Math.round(top + height / 2),
          },
        })
      );
    }, this.#createNewScoreIntervalInMs);
  }

  render() {
    return html`<img class="cursor" src="./assets/cursor.svg" />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "auto-cursor": AutoCursor;
  }
}
