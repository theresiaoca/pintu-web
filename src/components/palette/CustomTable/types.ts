import { ComponentType } from "react";

export type RecordType = {
  [key: string]: any;
};

export type FieldType = {
  fieldId: string;
  name?: string;
  align?: "inherit" | "left" | "right" | "justify" | "center";
  source?: string;
  sourceIcon?: string;
  sourceIconColor?: string;
  component: ComponentType<any>;
  record?: RecordType;
  style?: React.CSSProperties;
};
