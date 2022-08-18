import { Grid, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { TopMoverType } from "../../types";
import { useMemo } from "react";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: "1rem",
      "&:hover": {
        backgroundColor: "rgba(241,241,241,1)",
        cursor: "pointer",
      },
      width: "188px !important",
      gap: "5px",
    },
    icon: (props: Pick<TopMoverItemProps, "color" | "logo">) => ({
      mask: `url(${props.logo}) no-repeat 50% 50%`,
      display: "inline-block",
      maskSize: "cover",
      backgroundColor: `${props.color}`,
      width: "30px",
      height: "30px",
    }),
    textContainer: {
      alignItems: "center",
      marginLeft: "0.5rem",
      fontSize: "18px",
      fontWeight: 600,
      whiteSpace: "nowrap",
      width: "100%",
      maxWidth: "70px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "inline-block",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
    },
  })
);

type TopMoverItemProps = {
  data: TopMoverType;
  color: string;
  logo: string;
};

const TopMoverItem = ({ data, color, logo }: TopMoverItemProps) => {
  const classes = useStyles({ color, logo });

  const isPercentageUp = useMemo(() => {
    const percentage = parseFloat(data.day?.split("%")?.[0] || "0");
    if (percentage > 0) return true;
    return false;
  }, [data.day]);

  return (
    <Grid className={classes.container}>
      <Grid container>
        <div className={classes.icon} />
        <div className={classes.textContainer}>{data.name}</div>
      </Grid>
      <Grid style={{ color: "grey" }}>{data.latestPrice}</Grid>
      <Grid
        style={{
          color: isPercentageUp ? "rgb(28, 203, 33)" : "rgb(255, 90, 90)",
        }}
      >
        {isPercentageUp ? (
          <ArrowDropUpIcon
            viewBox="5 0 16 16"
            style={{ marginRight: "0.1rem" }}
          />
        ) : (
          <ArrowDropDownIcon
            viewBox="5 0 16 16"
            style={{ marginRight: "0.1rem" }}
          />
        )}
        {data.day?.replace("-", "")}
      </Grid>
    </Grid>
  );
};

export default TopMoverItem;
