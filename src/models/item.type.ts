import { NumberValue } from "../classes/number-value.js";

export type ItemName = "auto-cursor" | "auto-cursor-speed";

export type Item = {
  buy: () => void;
  xNextCost: (nbNextCost: number) => NumberValue | undefined;
  cost: NumberValue;
  nextCost: NumberValue | undefined;
  maxUpgrade: number;
  currentUpgrade: number;
  nbUpgradeAvaible: number;
};

export const allItemNameList: ItemName[] = ["auto-cursor", "auto-cursor-speed"];
