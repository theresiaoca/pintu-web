import { Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "0.5rem",
      borderRadius: "0.5rem",
      display: "flex",
      backgroundColor: "rgba(219,234,254,1)",
      color: "rgba(10,80,226,1)",
      fontWeight: "bold",
      fontSize:  "14px"
    },
  })
);

type TagItemProps = {
  tag: string;
};

const TagItem = ({ tag }: TagItemProps) => {
  const classes = useStyles();

  return <Grid className={classes.container}>{tag}</Grid>;
};

export default TagItem;
