import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("auto-cursor")
export class AutoCursor extends LitElement {
  @query(".cursor") cursor!: HTMLElement;
  @property({ type: Number }) index!: number;
  @property({ type: Number }) level!: number;
  static styles = css`
    @keyframes rotate-around-mouse {
      0% {
        rotate: 0deg;
      }
      100% {
        rotate: -360deg;
      }
    }

    :host {
      --radius: 200px;
      position: absolute;
      top: 50%;
      left: calc(50% - var(--radius));

      transform-origin: var(--radius);
      animation: rotate-around-mouse var(--rotation-time) linear infinite;
      will-change: transform;
    }

    .cursor {
      width: 100%;
      height: 100%;
      animation: rotate-around-mouse var(--rotation-time) linear infinite
        reverse;
      will-change: transform;
    }

    path {
      fill: hsl(33, 99%, var(--level));
    }
  `;

  get animationList(): Animation[] {
    return [this.getAnimations(), this.cursor?.getAnimations()]
      .flat()
      .filter((animation) => animation !== undefined);
  }

  #createNewScoreIntervalInMs = 500;
  #timerReference: ReturnType<typeof setInterval>;

  constructor() {
    super();

    this.#timerReference = setInterval(() => {
      const { top, left, width, height } = this.cursor.getBoundingClientRect();
      this.dispatchEvent(
        new CustomEvent("add-score", {
          detail: {
            x: Math.round(left + width / 2),
            y: Math.round(top + height / 2),
          },
          bubbles: true,
          composed: true,
        })
      );
    }, this.#createNewScoreIntervalInMs);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.#timerReference);
  }

  render(): TemplateResult {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="163"
        height="226"
        fill="none"
        viewBox="0 0 163 226"
        class="cursor"
        style="--level: ${(10 - this.level) * 10}%"
      >
        <path
          fill="#fff"
          d="M47.5 209.717c-18.222-8.33-24-80-38.5-113.5 4.5-12 11.5-15.5 23-6 8.725 7.208 13.751 24.465 15.384 35.207C46.6 114.841 42.447 25.337 54 11.217 62 5.217 69.5 9 76 16c-12.5 49 0 105.717-3.5 76.217.4-29.6-.282-30.28 3.5-37.5 5.5-10.5 13-9.5 23.5 2.597 5.5-11.597 21.5-5.597 29 7.624 4-10.221 23.5 0 25.5 19.279 3.956 38.139 0 100.5-18.5 125.5-36 14-70.5 8-88 0Z"
        />
        <path
          stroke="#000"
          stroke-linecap="round"
          stroke-width="15"
          d="M99.5 57.314C89 45.217 81.5 44.217 76 54.717c-3.782 7.22-3.1 7.9-3.5 37.5C76 121.717 63.5 65 76 16c-6.5-7-14-10.783-22-4.783-12.62 15.423-6.5 120.783-6.5 115-1.5-10.667-6.557-28.612-15.5-36-11.5-9.5-18.5-6-23 6 14.5 33.5 20.278 105.17 38.5 113.5 17.5 8 52 14 88 0 18.5-25 22.456-87.361 18.5-125.5-2-19.28-21.5-29.5-25.5-19.28m-29-7.623v38.903m0-38.903c5.5-11.597 21.5-5.597 29 7.624m0 0v39.279"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "auto-cursor": AutoCursor;
  }
}
