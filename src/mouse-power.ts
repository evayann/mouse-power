import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { Score } from "./models/score.type.js";

import { MouseEventController } from "./controllers/mouse-event.controller.js";
import { ScoreController } from "./controllers/score.controller.js";

import "./score-increment.js";
import "./mouse-usage.js";
import "./mouse-shop.js";
import "./auto-cursor.js";

@customElement("mouse-power")
export class MousePower extends LitElement {
  private mouseEventManager = new MouseEventController(this);
  private scoreController = new ScoreController(this);

  static styles = css`
    :host {
      --padding: 20px;

      display: flex;
      flex-direction: column;
      height: calc(100% - var(--padding) * 2);

      padding: var(--padding);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding-inline: 80px;
    }

    main {
      flex-grow: 2;
    }

    .logo {
      display: flex;
    }

    .statistics {
      display: flex;
      justify-content: space-evenly;
    }

    .mouse-eater {
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;

      width: 200px;
    }

    mouse-usage {
      width: 150px;

      position: absolute;
      right: 0;
      bottom: 0;
      translate: -15% -15%;
    }

    mouse-shop {
      position: absolute;
      left: 0;
      bottom: 0;
      translate: 15% -15%;
    }
  `;

  constructor() {
    super();
    this.addEventListener("wheel", this.onMouseScroll);
    this.addEventListener("click", this.onMouseClick);
    this.addEventListener("contextmenu", this.onMouseContextMenu);
    this.addEventListener("mousemove", this.onMouseMove);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("wheel", this.onMouseScroll);
    this.removeEventListener("click", this.onMouseClick);
    this.removeEventListener("contextmenu", this.onMouseContextMenu);
    this.removeEventListener("mousemove", this.onMouseMove);
  }

  render() {
    return html`
      <header>
        <h1 class="logo">Mouse Power</h1>
        <p>By Yann Zavattero</p>
      </header>
      <main>
        <div class="statistics">
          <p>Score:${this.scoreController.value}</p>
          <p>Multiplicator:${this.scoreController.multiplicator}</p>
        </div>

        <mouse-usage
          .isScroll=${this.mouseEventManager.isScroll}
          .isMoving=${this.mouseEventManager.isMoving}
          .isLeftClick=${this.mouseEventManager.isLeftClick}
          .isRightClick=${this.mouseEventManager.isRightClick}
        >
        </mouse-usage>

        <img class="mouse-eater" src="./assets/mouse-eater.svg" />
        <mouse-shop> </mouse-shop>

        <div class="score-increment-container">
          ${repeat(
            this.scoreController.scoreList,
            ([id]) => id,
            ([id, score]) =>
              html`<score-increment
                value=${score.value}
                .fromPosition=${score.startPosition}
                .toPosition=${{ x: 50, y: 50 }}
                .displayTimeInMs=${score.displayTimeInMs}
                @is-old=${() =>
                  this.scoreController.removeScore(id, score.value)}
              />`
          )}
        </div>

        <div class="auto-cursor-container">
          <auto-cursor
            @add-score=${(x: number, y: number) =>
              this.scoreController.addScore(x, y)}
          ></auto-cursor>
        </div>
      </main>
    `;
  }

  private onMouseScroll(): void {
    this.mouseEventManager.scroll();
  }

  private onMouseClick(): void {
    this.mouseEventManager.leftClick();
  }

  private onMouseContextMenu(mouseEvent: MouseEvent): void {
    mouseEvent.preventDefault();
    this.mouseEventManager.rightClick();
  }

  private onMouseMove = this.debounce((mouseEvent: MouseEvent): void => {
    this.scoreController.addScore(mouseEvent.clientX, mouseEvent.clientY);
    this.mouseEventManager.move();
  }, 100);

  private debounce(fct: Function, timeInMs: number) {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return (...args: unknown[]) => {
      if (timer) return;

      timer = setTimeout(() => {
        fct.apply(this, args);
        clearTimeout(timer);
        timer = undefined;
      }, timeInMs);
    };
  }
}
