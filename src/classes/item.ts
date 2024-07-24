import { Item } from "../models/item.type.js";
import { NumberValue } from "./number-value.js";

export class ShopItem {
  static create(factor: number, maxUpgrade: number): Item {
    let currentCost = new NumberValue(0);

    return {
      buy(): void {
        if (!this.nextCost) return;
        currentCost = this.nextCost;
        this.currentUpgrade++;
      },

      xNextCost(nbNextCost: number): NumberValue | undefined {
        if (this.currentUpgrade >= this.maxUpgrade) return undefined;

        const cost = Array.from({ length: nbNextCost }).reduce<number>(
          (cost) => (cost += factor),
          this.cost.raw
        );

        return new NumberValue(cost);
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
