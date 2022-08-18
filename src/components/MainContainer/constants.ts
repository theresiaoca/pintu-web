import FieldPercentage from "../palette/CustomTable/components/FieldPercentage";
import FieldText from "../palette/CustomTable/components/FieldText";

import { FieldType } from "../palette/CustomTable/types";

export const SUPPORTED_CURRENCIES_FIELDS: FieldType[] = [
  {
    component: FieldText,
    fieldId: "logo",
    sourceIcon: "logo",
    sourceIconColor: "color",
  },
  {
    component: FieldText,
    fieldId: "name",
    name: "CRYPTO",
    source: "name",
  },
  {
    component: FieldText,
    fieldId: "currencySymbol",
    source: "currencySymbol",
    style: { color: "#C8C8C8", fontWeight: "normal" },
  },
  {
    component: FieldText,
    fieldId: "latestPrice",
    name: "HARGA",
    source: "latestPrice",
  },
  {
    component: FieldPercentage,
    fieldId: "day",
    name: "24 JAM",
    source: "day",
  },
  {
    component: FieldPercentage,
    fieldId: "week",
    name: "1 MGG",
    source: "week",
  },
  {
    component: FieldPercentage,
    fieldId: "month",
    name: "1 BLN",
    source: "month",
  },
  {
    component: FieldPercentage,
    fieldId: "year",
    name: "1 THN",
    source: "year",
  },
];

export const LIST_TAGS: string[] = [
  "Terbaru",
  "DeFi",
  "NFT/Gaming",
  "CEX",
  "DEX",
  "Layer-1",
  "Infrastructure",
  "Lending",
  "Layer-2",
  "Ekosistem Stablecoin",
];
