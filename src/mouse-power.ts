import { LitElement, PropertyValues, TemplateResult, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import {
  BankController,
  MouseEventController,
  ShopController,
  BonusController,
  StatisticsController,
} from "./controllers/index.js";

import { Timing, NumberValue, ShopItem } from "./classes/index.js";
import { Item, ItemName, Notation, Theme } from "./models/index.js";

import "./auto-cursor-manager.js";
import "./mouse-eater.js";
import "./mouse-shop.js";
import "./mouse-usage.js";
import "./mouse-menu.js";
import "./money-created.js";

let self: MousePower;

@customElement("mouse-power")
export class MousePower extends LitElement {
  @query(".interest") interestSpan!: HTMLSpanElement;

  #nbMaxAutoCursor = 10;

  #lastInterest = new NumberValue(0);
  #resetMultiplicatorTimeInMs = 2000;
  #movementDebounceTimeInMs = 100;
  #targetMinimalFps = 30;
  #targetMs = (1 / this.#targetMinimalFps) * 1000;
  #isMenuOpen = false;
  #updateTimeout: ReturnType<typeof setTimeout>;
  #interestTimeout: ReturnType<typeof setTimeout>;

  #items: Record<ItemName, Item> = {
    "auto-cursor": ShopItem.create(1.1, this.#nbMaxAutoCursor),
    "auto-cursor-level": ShopItem.create(1.5, 20),
  };
  #actionsToBuyItems: Record<ItemName, () => void> = {
    "auto-cursor": () => this.bonusController.addNewAutoCursor(),
    "auto-cursor-level": () => this.bonusController.upgradeAutoCursor(),
  };

  private statisticsController = new StatisticsController(this);
  private mouseEventController = new MouseEventController(this);
  private bankController = new BankController(this, this.statisticsController);
  private shopController = new ShopController(this, this.#items);
  private bonusController = new BonusController(this);

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

      --padding-inline: 80px;
      padding-inline: var(--padding-inline);
      @media (width < 500px) {
        --padding-inline: 20px;
      }
    }

    main {
      flex-grow: 2;
      font-variant-numeric: tabular-nums;
    }

    .logo {
      display: flex;
    }

    .status {
      display: flex;
      justify-content: space-evenly;
    }

    .money {
      position: relative;
    }

    .money > .interest {
      position: absolute;
      top: 150%;
      left: 40%;
      opacity: 0;
      transition: top 1s ease-in-out;
      font-size: 0.8rem;
      font-weight: 800;
      color: green;
      text-shadow: 1px 1px white, -1px -1px white;
    }

    .money > .reveal {
      opacity: 1;
      top: 0;
    }

    mouse-eater {
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;

      --width: 400px;
      width: var(--width);
      aspect-ratio: 1;

      @media (height < 500px) {
        --width: 200px;
      }
    }

    mouse-usage {
      width: 150px;

      position: absolute;
      right: 0;
      bottom: 0;
      translate: -15% -15%;

      @media (width < 500px) {
        translate: -5% -5%;
      }
    }

    mouse-shop {
      position: absolute;
      left: 0;
      bottom: 0;
      translate: 15% -15%;

      @media (width < 500px) {
        translate: 5% -5%;
      }
    }

    auto-cursor-manager {
      --size: 40px;
    }
  `;

  get hasMoneyCreated(): boolean {
    return this.bankController.moneyPopUpList.length > 0;
  }

  constructor() {
    super();

    self = this;

    this.addEventListener("wheel", this.onMouseScroll);
    this.addEventListener("click", this.onMouseClick);
    this.addEventListener("contextmenu", this.onMouseContextMenu);
    this.addEventListener("mousemove", this.onMouseMove);

    this.#updateTimeout = setInterval(
      () => this.requestUpdate(),
      this.#targetMs
    );

    this.#interestTimeout = setInterval(() => {
      const interest = this.bankController.cashInInterest();

      const percentToDisplayInterest = 0.01;
      const isInterestDisplay =
        interest.raw -
          this.bankController.sold.raw * percentToDisplayInterest >=
        0;

      if (interest.isLowerThan(0.1) || !isInterestDisplay) return;

      this.#lastInterest = interest;
      this.displayInterestIndicator();
      this.requestUpdate();
    }, 1000);

    this.onChangeTheme((localStorage.getItem("theme") as Theme) ?? "light");
    this.onChangeNotation(
      (localStorage.getItem("notation") as Notation) ?? "natural"
    );
  }

  firstUpdated(): void {
    this.interestSpan.addEventListener(
      "transitionend",
      this.removeInterestIndicator
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener("wheel", this.onMouseScroll);
    this.removeEventListener("click", this.onMouseClick);
    this.removeEventListener("contextmenu", this.onMouseContextMenu);
    this.removeEventListener("mousemove", this.onMouseMove);

    this.interestSpan.removeEventListener(
      "transitionend",
      this.removeInterestIndicator
    );

    clearInterval(this.#updateTimeout);
    clearInterval(this.#interestTimeout);
  }
  isInterestIndicatorDisplay = false;
  render(): TemplateResult {
    return html`
      <header>
        <h1 class="logo">Mouse Power</h1>
        <button @click=${() => (this.#isMenuOpen = !this.#isMenuOpen)}>
          Menu
        </button>
      </header>
      <main>
        <div class="status">
          <p
            class="money"
            @click=${() => {
              this.isInterestIndicatorDisplay = true;
              this.requestUpdate();
            }}
          >
            Money:$${this.bankController.sold.display}
            <span
              class="interest ${this.isInterestIndicatorDisplay === true
                ? "reveal"
                : ""}"
            >
              Interest $${this.#lastInterest.display}
            </span>
          </p>
          <p>Timer:${this.statisticsController.playTime}</p>
          <p>Interest:${this.bankController.interest.display}</p>
        </div>

        <mouse-menu
          .isOpen=${this.#isMenuOpen}
          .cashGain=${this.statisticsController.totalMoneyGain}
          .interestGain=${this.statisticsController.totalInterestGain}
          .playTime=${this.statisticsController.playTime}
          @notation=${({ detail }: CustomEvent<{ notation: Notation }>) =>
            this.onChangeNotation(detail.notation)}
          @theme=${({ detail }: CustomEvent<{ theme: Theme }>) =>
            this.onChangeTheme(detail.theme)}
          @close=${() => (this.#isMenuOpen = false)}
        ></mouse-menu>

        <mouse-usage
          .isScroll=${this.mouseEventController.isScroll}
          .isMoving=${this.mouseEventController.isMoving}
          .isLeftClick=${this.mouseEventController.isLeftClick}
          .isRightClick=${this.mouseEventController.isRightClick}
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
        <auto-cursor-manager
          .autoCursorList=${this.bonusController.autoCursorList}
          .nbMaxAutoCursor=${this.#nbMaxAutoCursor}
          @add-score=${({ detail }: CustomEvent<{ x: number; y: number }>) => {
            const { x, y } = detail;
            this.bankController.createMoney(x, y);
            this.requestUpdate();
          }}
        ></auto-cursor-manager>
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
    const nbActionToDo = this.shopController.buy(itemName);
    const action = this.#actionsToBuyItems[itemName];
    Array.from({ length: nbActionToDo }).forEach(action);
  }

  private onMouseScroll(): void {
    this.mouseEventController.scroll();
  }

  private onMouseClick(): void {
    this.bankController.incrementInterest();
    this.resetMultiplicatorWhenDelayPassedAndNoMoreClick();

    this.mouseEventController.leftClick();
  }

  private onMouseContextMenu(mouseEvent: MouseEvent): void {
    mouseEvent.preventDefault();

    this.bankController.incrementInterest();
    this.resetMultiplicatorWhenDelayPassedAndNoMoreClick();

    this.mouseEventController.rightClick();
  }

  private resetMultiplicatorWhenDelayPassedAndNoMoreClick =
    Timing.delayAndCleanIfExist(() => {
      this.bankController.resetInterest();
      this.requestUpdate();
    }, this.#resetMultiplicatorTimeInMs);

  private onMouseMove = Timing.debounce((mouseEvent: MouseEvent): void => {
    this.bankController.createMoney(mouseEvent.clientX, mouseEvent.clientY);
    this.mouseEventController.move();
  }, this.#movementDebounceTimeInMs);

  private displayInterestIndicator(): void {
    this.isInterestIndicatorDisplay = true;
    this.requestUpdate();
  }

  private removeInterestIndicator(): void {
    self.isInterestIndicatorDisplay = false;
    self.requestUpdate();
  }
}
