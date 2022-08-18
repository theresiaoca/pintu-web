import { useMemo } from "react";
import get from "lodash/get";
import { createStyles, makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { FieldType } from "../types";

export const useStyles = makeStyles(() =>
  createStyles({
    textContainer: {
      display: "flex",
      alignItems: "center",
      fontSize: "18px",
      fontWeight: 600,
    },
  })
);

const FieldPercentage = ({ record, source }: FieldType) => {
  const classes = useStyles();
  const text = source ? get(record, source) : "";

  const isPercentageUp = useMemo(() => {
    const percentage = parseFloat(text?.split("%")?.[0] || "0");
    if (percentage > 0) return true;
    return false;
  }, [text]);

  return (
    <Grid container>
      <div
        className={classes.textContainer}
        style={{
          color: isPercentageUp ? "rgb(28, 203, 33)" : "rgb(255, 90, 90)",
        }}
      >
        {isPercentageUp ? (
          <ArrowDropUpIcon
            viewBox="5 5 16 16"
            style={{ marginRight: "0.1rem" }}
          />
        ) : (
          <ArrowDropDownIcon
            viewBox="5 5 16 16"
            style={{ marginRight: "0.1rem" }}
          />
        )}
        {text.replace("-", "")}
      </div>
    </Grid>
  );
};

export default FieldPercentage;
