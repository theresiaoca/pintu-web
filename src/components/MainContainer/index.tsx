import { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";

import CustomTable from "../palette/CustomTable";
import NavigationBar from "../palette/NavigationBar";
import SearchBar from "./components/SearchBar";
import TopMovers from "./components/TopMovers";
import Tags from "./components/Tags";

import { convertSupportedCurrencies } from "./helpers/convertSupportedCurrencies";
import { convertSupportedCurrenciesWithPrice } from "./helpers/convertSupportedCurrenciesWithPrice";
import { getTopMovers } from "./helpers/getTopMovers";
import { useStyles } from "./MainContainerCss";

import {
  ConvertedSupportedCurrenciesType,
  SupportedCurrenciesResponseType,
  TopMoverType,
} from "./types";
import { LIST_TAGS, SUPPORTED_CURRENCIES_FIELDS } from "./constants";

const MainContainer = () => {
  const classes = useStyles();
  const [supportedCurrencies, setSupportedCurrencies] = useState<
    ConvertedSupportedCurrenciesType[]
  >([]);
  const [topMovers, setTopMovers] = useState<TopMoverType[]>([]);

  const getSupportedCurrencies = async () => {
    const response = await fetch(
      "https://api.pintu.co.id/v2/wallet/supportedCurrencies"
    );
    const data: SupportedCurrenciesResponseType[] = (await response.json())
      .payload;
    const convertedData = convertSupportedCurrencies(data);
    getPriceChanges(convertedData);
  };

  const getPriceChanges = useCallback(
    async (tmpSupportedCurrencies?: ConvertedSupportedCurrenciesType[]) => {
      const response = await fetch(
        "https://api.pintu.co.id/v2/trade/price-changes"
      );
      const data = (await response.json()).payload;
      const convertedData = convertSupportedCurrenciesWithPrice(
        tmpSupportedCurrencies
          ? tmpSupportedCurrencies
          : [...supportedCurrencies],
        data
      );
      setSupportedCurrencies(convertedData);
      const tmpTopMovers = getTopMovers([...convertedData]);
      setTopMovers(tmpTopMovers);
    },
    [supportedCurrencies]
  );

  useEffect(() => {
    getSupportedCurrencies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getPriceChanges();
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [getPriceChanges]);

  return (
    <Grid className={classes.container}>
      <NavigationBar />
      <Grid container className={classes.contentContainer}>
        <SearchBar />
        <TopMovers data={topMovers} />
        <Tags tags={LIST_TAGS}/>
        <CustomTable
          fields={SUPPORTED_CURRENCIES_FIELDS}
          records={supportedCurrencies}
        />
      </Grid>
    </Grid>
  );
};

export default MainContainer;
