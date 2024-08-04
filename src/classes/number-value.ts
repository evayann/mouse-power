import { Notation } from "../models/notation.type.js";

import * as ADNotations from "@antimatter-dimensions/notations";

const naturalNotation = new ADNotations.StandardNotation();
const scientificNotation = new ADNotations.ScientificNotation();

export class NumberValue {
  static DEFAULT_TYPE: Notation = "natural";

  private displaysByNotation: Record<Notation, () => string> = {
    natural: () => this.displayNatural,
    scientific: () => this.displayExponential,
    percentage: () => this.displayPercentage,
  };

  get display(): string {
    return this.displaysByNotation[this.notation]();
  }

  get raw(): number {
    return this.value;
  }

  get isPositive(): boolean {
    return this.raw > 0;
  }

  get isNegative(): boolean {
    return this.raw < 0;
  }

  get isZero(): boolean {
    return this.raw === 0;
  }

  private get notation(): Notation {
    return this.options?.notation ?? NumberValue.DEFAULT_TYPE;
  }

  private get precision(): number {
    return this.options?.precision ?? 1;
  }

  private get displayExponential(): string {
    return scientificNotation.format(this.value, 2, 0);
  }

  private get displayNatural(): string {
    return naturalNotation.format(this.value, 2, 0);
  }

  private get displayPercentage(): string {
    return `${this.value.toFixed(this.precision)}%`;
  }

  constructor(
    private value: number,
    private options?: { notation?: Notation; precision?: number }
  ) {}

  add(toAdd: NumberValue | number): NumberValue {
    return new NumberValue(
      this.raw + (typeof toAdd === "number" ? toAdd : toAdd.raw),
      this.options
    );
  }

  isLowerThan(other: NumberValue | number): boolean {
    return this.raw < (typeof other === "number" ? other : other.raw);
  }
}
