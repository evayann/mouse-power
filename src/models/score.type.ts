import { NumberValue } from "../classes/number-value.js";
import { Point } from "./point.type.js";

export type MoneyCreated = {
  value: NumberValue;
  startPosition: Point;
  displayTimeInMs: number;
};
