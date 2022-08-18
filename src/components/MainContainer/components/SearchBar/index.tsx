import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    searchBarContainer: {
      marginBottom: "2rem",
    },
    textContainer: {
      display: "flex",
      alignItems: "center",
    },
    text: {
      fontSize: "28px !important",
      lineHeight: "34px !important",
      fontWeight: "500 !important",
    },
    searchInput: {
      width: "24rem",
      "& > .MuiInputBase-root > input": {
        padding: "0.75rem 1rem",
      },
      "& > .MuiInputBase-root > fieldset": {
        borderColor: "rgba(241,241,241,1)",
      },
      borderRadius: "0.5rem",
      backgroundColor: "rgba(241,241,241,1)",
    },
  })
);

const SearchBar = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.searchBarContainer}
      container
      justifyContent="space-between"
    >
      <Grid className={classes.textContainer}>
        <Typography className={classes.text}>
          Harga Crypto dalam Rupiah Hari Ini
        </Typography>
      </Grid>
      <Grid>
        <TextField
          id="search-field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className={classes.searchInput}
          placeholder="Cari aset di Pintu..."
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
