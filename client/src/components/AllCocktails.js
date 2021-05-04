import { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Grid } from "@material-ui/core";
import ImageCard from "./ImageCard";
import SearchInput from "./SearchInput";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    width: "90vw",
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hiden",
  },
  title: {
    width: "100vw",
    height: "20%",
    color: "white",
    fontSize: "1.4rem",
    margin: "0 auto",
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
}));

export default function AllCocktails() {
  const cocktails = useSelector((state) => state.data);
  const classes = useStyles();
  const [updatedList, setUpdatedList] = useState(cocktails);

  const handleSearch = (value) => {
    if (value) {
      setUpdatedList(
        cocktails.filter((cocktail) => {
          return Object.values(cocktail)
            .join(" ")
            .toLowerCase()
            .includes(value.toLowerCase());
        })
      );
    } else {
      setUpdatedList(cocktails);
    }

    document
      .querySelector(".MuiInputBase-root")
      .classList.remove("Mui-focused");
  };

  return (
    <>
      <Grid container spacing={5} className={classes.root}>
        <Grid className={classes.title} item>
          <h1>The Most Popular Cocktails</h1>
          <SearchInput handleSearch={handleSearch} />
        </Grid>
        {!updatedList ? (
          <Grid item>
            <CircularProgress />
          </Grid>
        ) : (
          updatedList.map((d) => (
            <Grid item key={d.id}>
              <ImageCard data={d} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
