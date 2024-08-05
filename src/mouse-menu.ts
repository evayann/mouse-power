import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { NumberValue } from "./classes/number-value.js";
import { Notation } from "./models/notation.type.js";
import { Theme } from "./models/theme.type.js";

@customElement("mouse-menu")
export class Menu extends LitElement {
  @query(".menu-dialog") menuDialog?: HTMLDialogElement;
  @property({ type: String }) playTime!: string;
  @property({ type: Object }) cashGain!: NumberValue;
  @property({ type: Object }) interestGain!: NumberValue;
  @property({ type: Boolean })
  set isOpen(isOpen: boolean) {
    this._isOpen = isOpen;
    const action = this._isOpen
      ? () => this.menuDialog?.showModal()
      : () => this.menuDialog?.close();
    action();
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  static styles = css`
    dialog::backdrop {
      background-color: var(--backdrop);
    }

    .menu-dialog[open] {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      color: var(--text);
    }

    .menu-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .menu-header > :first-child {
      margin-right: auto;
    }

    label,
    label > * {
      cursor: pointer;
    }

    .title {
      font-weight: 700;
    }

    p + p:not([class]) {
      margin-block: 0;
    }

    dialog {
      background-color: var(--background);
      opacity: 0.9;
    }
  `;

  private _isOpen!: boolean;

  render(): TemplateResult {
    return html`<dialog class="menu-dialog" @close=${this.closeMenu}>
      <div class="menu-header">
        <p class="title">Menu</p>
        <button @click=${this.closeMenu}>Close</button>
      </div>
      <label>
        Theme dark
        <input
          type="checkbox"
          .checked=${(localStorage.getItem("theme") as Theme) === "dark"}
          @change=${this.changeTheme}
      /></label>
      <label>
        Scientific notation
        <input
          type="checkbox"
          .checked=${(localStorage.getItem("notation") as Notation) ===
          "scientific"}
          @change=${this.changeNotation}
      /></label>
      <p class="title">Statistics</p>
      <p>Time play: ${this.playTime}</p>
      <p>Money earned: ${this.cashGain.display}</p>
      <p>Interest earned: ${this.interestGain.display}</p>
      <p class="title">What's this game ?</p>
      <p>Just a copy of clicker game with mouvement.</p>
      <p>
        The idea is from
        <a href="https://creativetechguy.com/mousepoint"
          >https://creativetechguy.com/mousepoint</a
        >
      </p>
    </dialog>`;
  }

  private changeTheme(inputEvent: InputEvent): void {
    const target = inputEvent.currentTarget as HTMLInputElement;
    this.dispatchEvent(
      new CustomEvent("theme", {
        detail: {
          theme: target.checked ? "dark" : "light",
        },
      })
    );
  }

  private changeNotation(inputEvent: InputEvent): void {
    const target = inputEvent.currentTarget as HTMLInputElement;
    this.dispatchEvent(
      new CustomEvent("notation", {
        detail: {
          notation: target.checked ? "scientific" : "natural",
        },
      })
    );
  }

  private closeMenu(): void {
    this.dispatchEvent(new CustomEvent("close"));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mouse-menu": Menu;
  }
}
