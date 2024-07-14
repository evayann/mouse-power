import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Point } from "./models/point.type.js";

@customElement("money-created")
export class MoneyCreated extends LitElement {
  @property({ type: String }) value!: string;
  @property({ type: Number }) set displayTimeInMs(displayTimeInMs: number) {
    this.style.setProperty("--display-time", `${displayTimeInMs}ms`);
  }

  @property({ type: Object }) set fromPosition(fromPosition: Point) {
    this.style.setProperty("--from-top", `${fromPosition.y}px`);
    this.style.setProperty("--from-left", `${fromPosition.x}px`);
  }

  @property({ type: Object }) set toPosition(toPosition: Point) {
    this.style.setProperty("--to-top", `${toPosition.y}%`);
    this.style.setProperty("--to-left", `${toPosition.x}%`);
  }

  static styles = css`
    :host {
      position: absolute;
      animation: move-to-target var(--display-time) ease-in;
      pointer-events: none;
      will-change: transform;
    }

    @keyframes move-to-target {
      0% {
        top: var(--from-top);
        left: var(--from-left);
        opacity: 1;
        scale: 1;
      }

      15% {
        scale: 1.3;
      }

      50% {
        scale: 1;
      }

      85% {
        opacity: 1;
      }

      100% {
        top: var(--to-top);
        left: var(--to-left);
        opacity: 0;
        scale: 0;
      }
    }

    div {
      position: relative;
      translate: -50% -50%;

      background-color: green;
      border: 1px solid lightgreen;

      &::before {
        content: "";
        position: absolute;

        height: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: lightgreen;

        left: 50%;
        translate: -50% 0;
      }
    }

    p {
      position: relative;
      margin: 0;
      font-size: 10px;
      margin: 10px 20px;
    }
  `;

  constructor() {
    super();
    this.addEventListener("animationend", this.onPointReachTartgetPosition);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("animationend", this.onPointReachTartgetPosition);
  }

  render(): TemplateResult {
    return html`<div><p>$${this.value}</p></div>`;
  }

  private onPointReachTartgetPosition(): void {
    this.dispatchEvent(new CustomEvent("is-old"));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "money-created": MoneyCreated;
  }
}
