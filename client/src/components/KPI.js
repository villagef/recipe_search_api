import { Grid, Paper } from "@material-ui/core";
import React from "react";

export default function KPI({ totalCocktails, name, color }) {
  return (
    <Grid
      style={{
        backgroundColor: `${color}`,
        color: "white",
        padding: "10px 10px",
        boxShadow: "4px 4px 19px -2px rgba(0,0,0,0.64)",
      }}
      item
      component={Paper}
    >
      <h3>Total {name}</h3>
      <h1>{totalCocktails}</h1>
    </Grid>
  );
}
