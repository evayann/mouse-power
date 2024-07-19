import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { Notation } from "./models/notation.type.js";
import { Theme } from "./models/theme.type.js";

@customElement("mouse-menu")
export class Menu extends LitElement {
  @query(".menu-dialog") menuDialog?: HTMLDialogElement;
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
      background-color: rgba(0, 0, 0, 0.1);
    }
  `;

  private _isOpen!: boolean;

  render(): TemplateResult {
    return html`<dialog class="menu-dialog">
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
}

declare global {
  interface HTMLElementTagNameMap {
    "mouse-menu": Menu;
  }
}
