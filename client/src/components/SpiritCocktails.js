import { useState, useEffect, useContext } from "react";
import { UseFetchData } from "../context/GlobalState";
import {GlobalContext} from "../context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Grid } from "@material-ui/core";
import ImageCard from "./ImageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    width: "80vw",
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

export default function SpiritCocktails() {
  // const { isLoading, isUpdating, error, data } = UseFetchData();
  const {cocktails} = useContext(GlobalContext);

  const classes = useStyles();
  
  return (
    <>
      <Grid container spacing={5} className={classes.root}>
        <Grid className={classes.title} item>
          <h1>The Most Popular Cocktails</h1>
        </Grid>
        {!cocktails ? (
          <Grid item>
            <CircularProgress />
          </Grid>
        ) : (
          cocktails.map((d) => (
            <Grid item key={d.id}>
              <ImageCard data={d} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
