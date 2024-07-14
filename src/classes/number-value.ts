export class NumberValue {
  private static readonly PRECISION_TYPE: "scientific" | "natural" = "natural";
  private static readonly ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  private static readonly LARGE_KNOW_PREFIX = "KMBT";

  get display(): string {
    return NumberValue.PRECISION_TYPE === "scientific"
      ? this.displayExponential
      : this.displayNatural;
  }

  get raw(): number {
    return this.value;
  }

  private get displayExponential(): string {
    return this.value.toExponential();
  }

  private get displayNatural(): string {
    return this.toShort(this.value);
  }

  constructor(private value: number) {}

  private toShort(value: number): string {
    const tier = Math.floor(Math.log10(Math.abs(value)) / 3) - 1;
    if (tier < 0) return value.toFixed();

    const nbValueInTier = Math.log10(Math.abs(value)) % 3;
    if (tier < NumberValue.LARGE_KNOW_PREFIX.length)
      return `${value.toFixed().slice(0, nbValueInTier + 1)}${
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

    return `${value.toFixed().slice(0, nbValueInTier + 1)}${suffix}`;
  }
}
