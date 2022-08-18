export type ConvertedSupportedCurrenciesType = {
  name: string;
  logo: string;
  color: string;
  currencySymbol: string;
  latestPrice?: string;
  day?: string;
  week?: string;
  month?: string;
  year?: string;
};

export type SupportedCurrenciesResponseType = {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: string;
  wallets: WalletType[];
};

export type WalletType = {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;
};

export type PriceChangeType = {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
};

export type TopMoverType = Pick<
  ConvertedSupportedCurrenciesType,
  "name" | "color" | "logo" | "latestPrice" | "day"
>;
