import { Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "2rem 1.5rem",
    },
    menuBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "70%",
    },
    menuItem: {
      padding: "0 2.5rem",
      "&:nth-last-child(1)": {
        padding: "0 0 0 2.5rem",
      },
    },
  })
);
const NavigationBar = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent={"space-between"}
      className={classes.container}
    >
      <Grid>PINTU</Grid>
      <Grid className={classes.menuBar}>
        <div className={classes.menuItem}>Fitur</div>
        <div className={classes.menuItem}>PTU</div>
        <div className={classes.menuItem}>Edukasi</div>
        <div className={classes.menuItem}>Ikuti Kami</div>
        <div className={classes.menuItem}>Blog</div>
        <div className={classes.menuItem}>Karier</div>
      </Grid>
    </Grid>
  );
};

export default NavigationBar;
