import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "auto",
      maxWidth: "1280px",
    },
    contentContainer: {
      padding: "1rem 1rem 2.5rem",
    },
  })
);
