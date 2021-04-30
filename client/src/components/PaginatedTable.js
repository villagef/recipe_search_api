import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
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

import SearchInput from "./SearchInput";
import ListElement from "./ListElement";
import CocktailForm from "./CocktailForm";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    // height: "100vh",
    // overflowY: "scroll",
    margin: "10px auto",
    padding: "0 20px",
    boxShadow: "4px 4px 19px -2px rgba(0,0,0,0.64)",
  },
  table: {
    width: "100%",
  },
  list: {
    width: "100%",
    height: "100%",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "auto",
    },
  },
  header: {
    display: "block",
    justifyContent: "space-between",
    padding: "10px 20px",
    margin: "15px 0",
    width: "100%",
    zIndex: 100,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  subheader: {
    display: "grid",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  pagination: {
    width: "100%",
  },
  listWrapper: {
    width: "100%",
  },
}));

export default function PaginatedTable({ data, setData }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [add, setAdd] = useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleAdd = () => {
    setAdd(true);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(data);

  return (
    <>
      {data && (
        <Grid container component={Paper} className={classes.mainContainer}>
          <Grid className={classes.header} item>
            <Grid item>
              <h1>Recent Cocktails</h1>
            </Grid>
            <Grid className={classes.subheader} item>
              <SearchInput />
              <Button variant="contained" color="primary" onClick={handleAdd}>
                Add NEW
              </Button>
            </Grid>
          </Grid>
          <Grid className={classes.listWrapper} item>
            <TableContainer className={classes.list}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <ListElement
                        key={row.id}
                        row={row}
                        data={data}
                        setData={setData}
                      />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid className={classes.pagination} item>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Grid>
        </Grid>
      )}
      {add === true && <CocktailForm add={add} setAdd={setAdd} />}
    </>
  );
}
