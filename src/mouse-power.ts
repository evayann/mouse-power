import { LitElement, TemplateResult, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import { MouseEventController } from "./controllers/mouse-event.controller.js";
import { BankController } from "./controllers/bank.controller.js";
import { BonusController } from "./controllers/bonus.controller.js";
import { ShopController } from "./controllers/shop.controller.js";
import { Timing } from "./classes/timing.js";

import { ItemName } from "./models/item.type.js";

import "./auto-cursor.js";
import "./mouse-eater.js";
import "./mouse-shop.js";
import "./mouse-usage.js";
import "./mouse-menu.js";
import "./money-created.js";
import { NumberValue } from "./classes/number-value.js";
import { Notation } from "./models/notation.type.js";
import { Theme } from "./models/theme.type.js";

@customElement("mouse-power")
export class MousePower extends LitElement {
  private mouseEventManager = new MouseEventController(this);
  private bankController = new BankController(this);
  private shopController = new ShopController(this);
  private bonusController = new BonusController(this);

  #startTime = new Date();
  #resetMultiplicatorTimeInMs = 2000;
  #movementDebounceTimeInMs = 50;
  #targetMinimalFps = 30;
  #targetMs = (1 / this.#targetMinimalFps) * 1000;
  #isMenuOpen = false;
  #updateTimeout: ReturnType<typeof setTimeout>;
  #interestTimeout: ReturnType<typeof setTimeout>;

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
      font-variant-numeric: tabular-nums;
    }

    .logo {
      display: flex;
    }

    .statistics {
      display: flex;
      justify-content: space-evenly;
    }

    mouse-eater {
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;

      width: 400px;
      aspect-ratio: 1;
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

    auto-cursor {
      width: 40px;
    }
  `;

  get hasMoneyCreated(): boolean {
    return this.bankController.moneyPopUpList.length > 0;
  }

  private get timeFromStart(): string {
    const now = new Date();
    return this.timerFormat(+now - +this.#startTime);
  }

  constructor() {
    super();
    this.addEventListener("wheel", this.onMouseScroll);
    this.addEventListener("click", this.onMouseClick);
    this.addEventListener("contextmenu", this.onMouseContextMenu);
    this.addEventListener("mousemove", this.onMouseMove);

    this.#updateTimeout = setInterval(
      () => this.requestUpdate(),
      this.#targetMs
    );
    this.#interestTimeout = setInterval(() => {
      this.bankController.cashInInterest();
      this.requestUpdate();
    }, 1000);

    this.onChangeTheme((localStorage.getItem("theme") as Theme) ?? "light");
    this.onChangeNotation(
      (localStorage.getItem("notation") as Notation) ?? "natural"
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("wheel", this.onMouseScroll);
    this.removeEventListener("click", this.onMouseClick);
    this.removeEventListener("contextmenu", this.onMouseContextMenu);
    this.removeEventListener("mousemove", this.onMouseMove);

    clearInterval(this.#updateTimeout);
    clearInterval(this.#interestTimeout);
  }

  render(): TemplateResult {
    return html`
      <header>
        <h1 class="logo">Mouse Power</h1>
        <button @click=${() => (this.#isMenuOpen = !this.#isMenuOpen)}>
          Menu
        </button>
      </header>
      <main>
        <div class="statistics">
          <p>Money:$${this.bankController.sold.display}</p>
          <p>Timer:${this.timeFromStart}</p>
          <p>Interest:${this.bankController.interest.display}</p>
        </div>

        <mouse-menu
          .isOpen=${this.#isMenuOpen}
          @notation=${({ detail }: CustomEvent<{ notation: Notation }>) =>
            this.onChangeNotation(detail.notation)}
          @theme=${({ detail }: CustomEvent<{ theme: "dark" | "light" }>) =>
            this.onChangeTheme(detail.theme)}
        ></mouse-menu>

        <mouse-usage
          .isScroll=${this.mouseEventManager.isScroll}
          .isMoving=${this.mouseEventManager.isMoving}
          .isLeftClick=${this.mouseEventManager.isLeftClick}
          .isRightClick=${this.mouseEventManager.isRightClick}
        >
        </mouse-usage>

        <mouse-eater .isEating=${this.hasMoneyCreated}></mouse-eater>
        <mouse-shop
          .currentMoney=${this.bankController.sold}
          .itemList=${this.shopController.itemList}
          @buy=${({ detail }: CustomEvent<{ name: ItemName }>) =>
            this.onBuy(detail.name)}
        >
        </mouse-shop>

        <div class="score-increment-container">
          ${repeat(
            this.bankController.moneyPopUpList,
            ({ id }) => id,
            ({ id, moneyCreated }) =>
              html`<money-created
                value=${moneyCreated.value.display}
                .fromPosition=${moneyCreated.startPosition}
                .toPosition=${{ x: 50, y: 50 }}
                .displayTimeInMs=${moneyCreated.displayTimeInMs}
                @is-old=${() => this.bankController.cashIn(id)}
              />`
          )}
        </div>

        <div class="auto-cursor-container">
          ${repeat(
            this.bonusController.autoCursorList,
            (_, index) => index,
            ({ speed }) => html`<auto-cursor
              @add-score=${({
                detail,
              }: CustomEvent<{ x: number; y: number }>) => {
                const { x, y } = detail;
                this.bankController.createMoney(x, y);
                this.requestUpdate();
              }}
            ></auto-cursor>`
          )}
        </div>
      </main>
    `;
  }

  private onChangeNotation(notation: Notation): void {
    NumberValue.DEFAULT_PRECISION_TYPE = notation;
    localStorage.setItem("notation", notation);
    this.requestUpdate();
  }

  private onChangeTheme(theme: Theme): void {
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
    this.requestUpdate();
  }

  private onBuy(itemName: ItemName): void {
    const itemActions: Record<ItemName, () => void> = {
      "auto-cursor": () => this.bonusController.addNewAutoCursor(),
      "auto-cursor-speed": () => {},
    };
    const nbActionToDo = this.shopController.buy(itemName);
    const action = itemActions[itemName];
    Array.from({ length: nbActionToDo }).forEach(action);
  }

  private onMouseScroll(): void {
    this.mouseEventManager.scroll();
  }

  private onMouseClick(): void {
    this.bankController.incrementInterest();
    this.resetMultiplicatorWhenDelayPassedAndNoMoreClick();

    this.mouseEventManager.leftClick();
  }

  private onMouseContextMenu(mouseEvent: MouseEvent): void {
    mouseEvent.preventDefault();

    this.bankController.incrementInterest();
    this.resetMultiplicatorWhenDelayPassedAndNoMoreClick();

    this.mouseEventManager.rightClick();
  }

  private resetMultiplicatorWhenDelayPassedAndNoMoreClick =
    Timing.delayAndCleanIfExist(() => {
      this.bankController.resetInterest();
      this.requestUpdate();
    }, this.#resetMultiplicatorTimeInMs);

  private onMouseMove = Timing.debounce((mouseEvent: MouseEvent): void => {
    this.bankController.createMoney(mouseEvent.clientX, mouseEvent.clientY);
    this.mouseEventManager.move();
  }, this.#movementDebounceTimeInMs);

  private timerFormat(timeInMs: number): string {
    const timeInSeconds = Math.floor(timeInMs / 1000);
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
