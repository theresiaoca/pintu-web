import { Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import TagItem from "./TagItem";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginBottom: "1.5rem",
      gap: "1rem",
      display: "flex",
      alignItems: "center",
      overflowX: "auto",
      whiteSpace: "nowrap",
      flexWrap: "nowrap",
    },
  })
);

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      {tags.map((tag) => (
        <TagItem tag={tag} />
      ))}
    </Grid>
  );
};

export default Tags;
