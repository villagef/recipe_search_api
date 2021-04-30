import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PaginatedTable from "../components/PaginatedTable";
import KPI from "../components/KPI";

import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Paper,
  Grid,
  Button,
  Container,
} from "@material-ui/core";

import { UseFetchData } from "../context/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "70px",
    paddingBottom: "30px",
    overflow: "hidden",
  },
  mainContainer: {
    height: "100vh",
    paddingTop: "70px",
    boxShadow: "4px 4px 19px -2px rgba(0,0,0,0.64)",
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      height: "100vh",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridTemplateRows: "1fr 6fr",
      gridTemplateAreas: `"content1 content2 content3 content4"
        "main main main main"`,
      gridGap: "0.2rem",
    },
  },
  kpiContainer: {
    display: "grid",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-around",
      height: "15%",
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const { isLoading, isUpdating, error, data } = UseFetchData();
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setCocktails(data);
  }, [data]);

  console.log(cocktails);
  

  return (
    <>
      <div className={classes.root}>
        <Container>
          <Grid container spacing={4} maxWidth="sm">
            <Grid item xs>
              {!isLoading && (
                <KPI
                  name="Cocktails"
                  color="#4285f4"
                  totalCocktails={data.length}
                />
              )}
            </Grid>
            <Grid item xs>
              {!isLoading && (
                <KPI
                  name="Classics"
                  color="#fb4c2f"
                  totalCocktails={
                    data.filter((e) => e.type === "classic").length
                  }
                />
              )}
            </Grid>
            <Grid item xs>
              {!isLoading && (
                <KPI
                  style={{ gridArea: "content3" }}
                  name="Tropicals"
                  color="#34a853"
                  totalCocktails={
                    data.filter((e) => e.type === "tropical").length
                  }
                />
              )}
            </Grid>
            <Grid item xs>
              {!isLoading && (
                <KPI
                  name="Modern"
                  color="#fbbc04"
                  totalCocktails={
                    data.filter((e) => e.type === "modern classic").length
                  }
                />
              )}
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs>
              <PaginatedTable
                style={{ gridArea: "main" }}
                data={cocktails}
                setData={setCocktails}
                isLoading={isLoading}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
