import { css, html, LitElement, PropertyValues, TemplateResult } from "lit";
import { customElement, property, queryAll } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import "./auto-cursor.js";
import { AutoCursor } from "./auto-cursor.js";

@customElement("auto-cursor-manager")
export class AutoCursorManager extends LitElement {
  @queryAll("auto-cursor") autoCursorElementList!: NodeListOf<AutoCursor>;
  @property({ type: Array }) autoCursorList!: { level: number }[];
  @property({ type: Number }) nbMaxAutoCursor!: number;

  #rotationTimeInMs = 5000;

  static styles = css`
    auto-cursor {
      width: var(--size);
      height: var(--size);
    }
  `;

  render(): TemplateResult {
    return html`${repeat(
      this.autoCursorList,
      (_, index) => index,
      ({ level }, index) =>
        html`<auto-cursor
          .index=${index}
          .level=${level}
          style=${`--rotation-time: ${this.#rotationTimeInMs}ms`}
        ></auto-cursor>`
    )}`;
  }

  async updated(changed: PropertyValues) {
    super.updated(changed);

    const autoCursorList = [...this.autoCursorElementList].sort(
      (autoCursor1, autoCursor2) => autoCursor1.index - autoCursor2.index
    );

    await Promise.all(
      autoCursorList.map((autoCursor) => autoCursor.updateComplete)
    );

    const animationListForCursorList = autoCursorList.map(
      (autoCursor) => autoCursor.animationList
    );

    const startTime =
      (animationListForCursorList.shift()?.[0]?.currentTime as number) ?? 0;

    const rotationOffset = this.#rotationTimeInMs / this.nbMaxAutoCursor;
    animationListForCursorList.forEach((animationTuple, index) =>
      animationTuple.forEach(
        (animation) =>
          (animation.currentTime = startTime + (index + 1) * rotationOffset)
      )
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "auto-cursor-manager": AutoCursorManager;
  }
}
