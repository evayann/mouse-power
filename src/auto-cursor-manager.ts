import { css, html, LitElement, PropertyValues, TemplateResult } from "lit";
import { customElement, property, queryAll } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import "./auto-cursor.js";
import { AutoCursor } from "./auto-cursor.js";

@customElement("auto-cursor-manager")
export class AutoCursorManager extends LitElement {
  @queryAll("auto-cursor") autoCursorElementList!: NodeListOf<AutoCursor>;
  @property({ type: Array }) autoCursorList!: { level: number }[];

  static styles = css`
    auto-cursor {
      width: var(--size);
      height: var(--size);
    }
  `;

  private rotationTimeInMs = 5000;

  render(): TemplateResult {
    return html`${repeat(
      this.autoCursorList,
      (_, index) => index,
      ({ level }, index) =>
        html`<auto-cursor
          .index=${index}
          .level=${level}
          style=${`--rotation-time: ${this.rotationTimeInMs}ms`}
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

    const animationList = autoCursorList.flatMap(
      (autoCursor) => autoCursor.animationList
    );

    const startTime = animationList.shift()?.currentTime as number;
    if (!startTime) return;

    const maxNbAutoursorOnCircle = 10;
    const rotationOffset = this.rotationTimeInMs / maxNbAutoursorOnCircle;
    const nbAnimation = autoCursorList.length - 1;
    const newAnimationList = animationList.splice(-2, 2);
    newAnimationList.forEach(
      (animation) =>
        (animation.currentTime = startTime + nbAnimation * rotationOffset)
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "auto-cursor-manager": AutoCursorManager;
  }
}
