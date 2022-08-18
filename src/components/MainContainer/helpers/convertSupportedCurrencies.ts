import {
  ConvertedSupportedCurrenciesType,
  SupportedCurrenciesResponseType,
} from "../types";

export const convertSupportedCurrencies = (
  currencies: SupportedCurrenciesResponseType[]
): ConvertedSupportedCurrenciesType[] => {
  const convertedCurrencies = currencies.reduce(
    (newCurrencies: ConvertedSupportedCurrenciesType[], currency) => {
      if (currency.currencyGroup !== "IDR") {
        newCurrencies.push({
          name: currency.name,
          currencySymbol: currency.currencySymbol,
          logo: currency.logo,
          color: currency.color,
        });
      }
      return newCurrencies;
    },
    []
  );

  return convertedCurrencies;
};
