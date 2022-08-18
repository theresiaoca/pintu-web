import { ConvertedSupportedCurrenciesType, TopMoverType } from "../types";

export const getTopMovers = (
  data: ConvertedSupportedCurrenciesType[]
): TopMoverType[] => {
  const sortedData = data.sort((a, b) => {
    const tmpA = parseFloat(a.day?.split("%")?.[0] || "0");
    const tmpB = parseFloat(b.day?.split("%")?.[0] || "0");

    if (tmpA > tmpB) {
      return -1;
    }

    if (tmpA < tmpB) {
      return 1;
    }

    return 0;
  });

  return sortedData.slice(0, 6).map((dt) => ({
    name: dt.name,
    color: dt.color,
    day: dt.day,
    latestPrice: dt.latestPrice,
    logo: dt.logo,
  }));
};
