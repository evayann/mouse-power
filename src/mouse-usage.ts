import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mouse-usage")
export class MouseUsage extends LitElement {
  @property({ type: Boolean }) isMoving = false;
  @property({ type: Boolean }) isScroll = false;
  @property({ type: Boolean }) isLeftClick = false;
  @property({ type: Boolean }) isRightClick = false;

  static styles = css`
    :host {
      display: block;
    }

    * {
      transition: stroke 0.3s, fill 0.3s;
    }
  `;

  render(): TemplateResult {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="var(--border)"
        viewBox="0 0 528 439"
      >
        <g class="Mouse With Indicators">
          <g class="Mouse" fill="white">
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M89.55 163.698c30.917-31.807 76.505-66.505 112.047-86.746 28.554-19.276 82.408-44.818 110.239-47.348 42.913-3.901 82.77 11.927 101.203 23.855 45.804 29.638 74.457 58.256 81.324 68.312 10.12 14.819 25.301 38.168 25.301 78.071 2.53 13.373-9.398 70.842-29.638 86.745-16.28 12.791-47.71 36.867-76.264 48.795-10.864 4.538-61.806 28.915-111.323 50.24-46.534 17.506-71.844 32.197-105.902 27.831-14.096-1.808-69.758-23.614-99.035-37.229l-32.168-15.542c-23.132-13.011-48.794-27.469-54.939-48.071-13.012-34.698 28.915-97.227 79.156-148.913Z"
              class="Outer Border"
            />
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M27.383 242.853c-9.639 11.446-24.144 44.602 5.06 65.421 36.505 26.023 127.865 67.379 147.829 71.565 22.409 4.698 62.167.913 91.444-12.289 26.014-11.731 61.299-25.673 93.974-40.843 47.532-22.067 76.626-36.144 93.613-48.071 14.016-9.841 57.469-44.819 59.638-77.348"
              class="Inner Border"
            />
            <g class="Split">
              <path
                stroke-linecap="round"
                stroke-width="15"
                d="M92.803 338.273c-5.06-26.746 24.578-59.637 31.084-64.336"
                class="Start split"
              />
              <path
                stroke-linecap="round"
                stroke-width="15"
                d="M147.016 274.66c-6.867 6.144-31.512-3.976-31.075-22.357.723-30.361 37.946-50.293 42.283-51.377 4.337-1.084 31.451 10.535 33.62 17.041m-44.828 56.693c14.816-16.145 46.844-53.802 44.828-56.693m-44.828 56.693c-2.653-6.524-5.783-17.711 6.868-34.337 9.471-12.449 30.017-26.641 37.96-22.356"
                class="Scroll"
              />
              <path
                stroke-linecap="round"
                stroke-width="15"
                d="M175.935 206.709c25.903-23.855 83.854-73.155 96.865-72.288"
                class="End Split"
              />
              <path
                fill="var(--border)"
                d="M285.451 135.144c-2.357 10.843-8.356 13.012-15.542 13.012s-13.012-5.826-13.012-13.012c0-9.036 9.44-13.735 16.626-13.735 4.699 0 14.001 4.199 11.928 13.735Z"
                class="Circle End Split"
              />
            </g>
          </g>
          <path
            stroke=${this.isLeftClick ? "red" : "var(--border)"}
            stroke-linecap="round"
            stroke-width="15"
            d="M134.5 333.5c21 11 67.1 35.2 143.5 0"
            class="Left Click"
          />
          <path
            stroke=${this.isRightClick ? "red" : "var(--border)"}
            stroke-linecap="round"
            stroke-width="15"
            d="M75.5 302c-13-7.5-52.5-18-25.5-58.5"
            class="Right Click"
          />
          <g
            class="Mouse Move"
            stroke=${this.isMoving ? "red" : "var(--border)"}
          >
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M501.871 325.938C457.773 430.117 385.885 320.468 367 427.57"
              class="Mouse Move R1"
            />
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M519.729 357.678c-37.236 78.729-102.763 9.804-117.729 71.644"
              class="Mouse Move R2"
            />
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M60.663 131.754C86 21.5 175.837 117 175.837 8.246"
              class="Mouse Move R1"
            />
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M43.501 100C66.5 16 143 72.5 147 9"
              class="Mouse Move R2"
            />
          </g>
          <path
            stroke=${this.isScroll ? "red" : "var(--border)"}
            stroke-linecap="round"
            stroke-width="2"
            d="M129 240.5c.681 3.088 6.387 6.202 9.423 6.018m-6.422-12.036c0 3.518 6.422 7.018 9.422 6.018M137 228.464c-.577 3.536 5 7.036 9.423 6.018M159.5 210.5c.681 3.088 5.464 5.184 8.5 5m-26 8c-.577 3.5 5 7.5 8.5 6M147 219c.681 3.088 5.464 5.684 8.5 5.5m-3-9.5c.681 3.088 4.964 5.684 8 5.5M127 257.518c.681 3.088 5.165 5.701 8.201 5.518M126.3 251.5c.681 3.088 6.386 6.202 9.422 6.018M127 246c.681 3.088 6.387 6.202 9.423 6.018"
            class="Scroll Grip"
          />
        </g>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mouse-usage": MouseUsage;
  }
}
