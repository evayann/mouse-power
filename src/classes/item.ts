import { Item } from "../models/item.type.js";

export class ShopItem {
  static create(factor: number, maxUpgrade: number): Item {
    let currentCost = 0;

    return {
      buy() {
        if (!this.nextCost) return;
        currentCost = this.nextCost;
        this.currentUpgrade++;
      },

      xNextCost(nbNextCost: number): number | undefined {
        return this.currentUpgrade >= this.maxUpgrade
          ? undefined
          : this.cost + factor * Math.min(nbNextCost, this.nbUpgradeAvaible);
      },

      currentUpgrade: 0,
      maxUpgrade,

      get nbUpgradeAvaible(): number {
        return this.maxUpgrade - this.currentUpgrade;
      },

      get cost(): number {
        return currentCost;
      },

      get nextCost(): number | undefined {
        return this.currentUpgrade < this.maxUpgrade
          ? this.cost + factor
          : undefined;
      },
    };
  }
}
