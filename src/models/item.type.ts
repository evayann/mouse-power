export type ItemName = "auto-cursor" | "auto-cursor-speed";

export type Item = {
  buy: () => void;
  xNextCost: (nbNextCost: number) => number | undefined;
  cost: number;
  nextCost: number | undefined;
  maxUpgrade: number;
  currentUpgrade: number;
  nbUpgradeAvaible: number;
};

export const allItemNameList: ItemName[] = ["auto-cursor", "auto-cursor-speed"];
