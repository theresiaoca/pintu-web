import { FieldType } from "../types";
import get from "lodash/get";
import { createStyles, makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

export const useStyles = makeStyles(() =>
  createStyles({
    icon: (props: { color: string; logo: string }) => ({
      mask: `url(${props.logo}) no-repeat 50% 50%`,
      display: "inline-block",
      maskSize: "cover",
      backgroundColor: `${props.color}`,
      width: "30px",
      height: "30px",
    }),
    textContainer: {
      display: "flex",
      alignItems: "center",
      fontSize: "18px",
      fontWeight: 600,
    },
  })
);

const FieldText = ({
  record,
  source,
  sourceIcon,
  sourceIconColor,
  style,
}: FieldType) => {
  const text = source ? get(record, source) : "";
  const logo = sourceIcon ? get(record, sourceIcon) : "";
  const color = sourceIconColor ? get(record, sourceIconColor) : "";
  const classes = useStyles({ logo, color });

  return (
    <Grid container>
      {logo && <div className={classes.icon} />}
      <div className={classes.textContainer} style={{ ...style }}>
        {text}
      </div>
    </Grid>
  );
};

export default FieldText;
