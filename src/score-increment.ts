import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Point } from "./models/point.type.js";

@customElement("score-increment")
export class ScoreIncrement extends LitElement {
  @property({ type: Number }) value!: number;
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

    p {
      translate: -50% -50%;
      margin: 0;

      paint-order: stroke fill;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #ededed;
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
    return html`<p>+${this.value}</p>`;
  }

  private onPointReachTartgetPosition(): void {
    this.dispatchEvent(new CustomEvent("is-old"));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "score-increment": ScoreIncrement;
  }
}
