import { Notation } from "../models/notation.type.js";

export class NumberValue {
  static DEFAULT_PRECISION_TYPE: Notation = "natural";
  private static readonly ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  private static readonly LARGE_KNOW_PREFIX = "KMBT";

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
    return this.options?.notation ?? NumberValue.DEFAULT_PRECISION_TYPE;
  }

  private get precision(): number {
    return this.options?.precision ?? 1;
  }

  private get displayExponential(): string {
    if (this.value < 1e3) return this.value.toFixed(1);
    return this.value.toExponential(this.precision);
  }

  private get displayNatural(): string {
    return this.toShort(this.value);
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

  private toShort(value: number): string {
    const tier = Math.floor(Math.log10(Math.abs(value)) / 3) - 1;
    if (tier < 0) return value.toFixed(this.precision);

    const nbValueInTier = Math.log10(Math.abs(value)) % 3;
    if (tier < NumberValue.LARGE_KNOW_PREFIX.length)
      return `${value.toFixed(this.precision).slice(0, nbValueInTier + 1)}${
        NumberValue.LARGE_KNOW_PREFIX[tier]
      }`;

    const moduloTier =
      (tier - NumberValue.LARGE_KNOW_PREFIX.length) %
      NumberValue.ALPHABET.length;
    const letter = NumberValue.ALPHABET[moduloTier];
    const nbLetter = Math.floor(
      (tier - NumberValue.LARGE_KNOW_PREFIX.length) /
        NumberValue.ALPHABET.length
    );
    const suffix = letter.repeat(nbLetter + 1);

    return `${value
      .toFixed(this.precision)
      .slice(0, nbValueInTier + 1)}${suffix}`;
  }
}
