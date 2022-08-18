import { Grid, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import { TopMoverType } from "../../types";
import TopMoverItem from "./TopMoverItem";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: "1.5rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
    },
    textContainer: {
      marginBottom: "0.5rem",
    },
    text: {
      fontSize: "20px !important",
      lineHeight: "29px !important",
    },
    topMoverItemContainer: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      overflowX: "auto",
      whiteSpace: "nowrap",
    },
  })
);

type TopMoversProps = {
  data: TopMoverType[];
};

const TopMovers = ({ data }: TopMoversProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid container className={classes.textContainer}>
        <Typography className={classes.text}>🔥 Top Movers (24 Jam)</Typography>
      </Grid>
      <Grid className={classes.topMoverItemContainer}>
        {data.map((dt) => (
          <TopMoverItem data={dt} color={dt.color} logo={dt.logo} />
        ))}
      </Grid>
    </Grid>
  );
};

export default TopMovers;
