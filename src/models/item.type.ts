import { NumberValue } from "../classes/number-value.js";

export type ItemName = "auto-cursor" | "auto-cursor-level";

export type Item = {
  buy: () => number;
  xNextCost: (nbNextCost: number) => NumberValue | undefined;
  firstCost: () => NumberValue;
  cost: NumberValue;
  nextCost: NumberValue | undefined;
  maxUpgrade: number;
  currentUpgrade: number;
  nbUpgradeAvaible: number;
};

export const allItemNameList: ItemName[] = ["auto-cursor", "auto-cursor-level"];
