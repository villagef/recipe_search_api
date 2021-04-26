import { useState } from "react";
import { UseFetchData } from "../context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Paper,
  Grid,
} from "@material-ui/core";

import SearchInput from "./SearchInput";
import ListElement from "./ListElement";

const useStyles = makeStyles({
  mainContainer: {
    width: "60vw",
    marginTop: 100,
    boxShadow: "4px 4px 19px -2px rgba(0,0,0,0.64)",
  },
  table: {
    width: "100%",
  },
  list: {
    width: "100%",
    height: 500,
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 20px",
    width: "60vw",
    zIndex: 100,
  },
  pagination: {
    width: "100%",
  },
  listWrapper: {
    width: "100%",
  },
});

export default function PaginatedTable() {
  const { isLoading, isUpdating, error, data } = UseFetchData();
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(data);

  return (
    <>
      {!isLoading && (
        <Grid container component={Paper} className={classes.mainContainer}>
          <Grid className={classes.header} item>
            <h1>Recent Cocktails</h1>
            <SearchInput />
          </Grid>
          <Grid className={classes.listWrapper} item>
            <TableContainer className={classes.list}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <ListElement key={row.id} row={row} />
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
    </>
  );
}
