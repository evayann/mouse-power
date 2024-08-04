declare module "@antimatter-dimensions/notations" {
  export type ADNotationObject<T> = {
    new (): T;
    format: (
      value: number,
      places?: number,
      placesUnder1000?: number
    ) => string;
    name: string;
    infinite: string;
    negativeInfinite: string;
  };

  export const Settings = {
    exponentCommas: {
      show: true,
      min: 100000,
      max: 1000000000,
    },
    exponentDefaultPlaces: 3,
  };

  export const ScientificNotation = ADNotationObject<ScientificNotation>;
  export const StandardNotation = ADNotationObject<StandardNotation>;
}
