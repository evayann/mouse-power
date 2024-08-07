import { Item } from "../models/item.type.js";
import { NumberValue } from "./number-value.js";

export class ShopItem {
  static create(factor: number, maxUpgrade: number): Item {
    let currentCost = new NumberValue(0);

    return {
      buy(): number {
        if (!this.nextCost) return 0;
        currentCost = this.nextCost;
        this.currentUpgrade++;
        return currentCost.raw;
      },

      xNextCost(nbNextCost: number): NumberValue | undefined {
        if (this.currentUpgrade >= this.maxUpgrade) return undefined;

        const nbUpgradeBuyable = Math.min(nbNextCost, this.nbUpgradeAvaible);
        const cost = Array.from({
          length: nbUpgradeBuyable,
        }).reduce<number>((cost) => (cost += factor), this.cost.raw);
        return new NumberValue(cost);
      },

      firstCost(): NumberValue {
        return new NumberValue(0 + factor);
      },

      currentUpgrade: 0,
      maxUpgrade,

      get nbUpgradeAvaible(): number {
        return this.maxUpgrade - this.currentUpgrade;
      },

      get cost(): NumberValue {
        return currentCost;
      },

      get nextCost(): NumberValue | undefined {
        return this.currentUpgrade < this.maxUpgrade
          ? new NumberValue(this.cost.raw + factor)
          : undefined;
      },
    };
  }
}
