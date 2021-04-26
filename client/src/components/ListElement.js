import { makeStyles } from "@material-ui/core/styles";
import { TableCell, TableRow, Button, ButtonGroup } from "@material-ui/core";

import { UseDeleteData } from "../context/GlobalState";


const useStyles = makeStyles({
  description: {
    textOverflow: "ellipsis",
    whiteSpace: "wrap",
    overflow: "hidden",
    width: "100%",
    height: "50px",
  },
  image: {
    width: "80px",
    borderRadius: "50%",
    boxShadow: "4px 4px 19px -2px rgba(0,0,0,0.64)",
  }
});

export default function ListElement({ row }) {
  const classes = useStyles();
  async function handleDeleteClick(item) {
   await UseDeleteData(item);
  }

  return (
    <div>
      <TableRow>
        <TableCell component="th" scope="row">
          <img className={classes.image}
            src={row.image}
          ></img>
        </TableCell>
        <TableCell align="left">
          <h2 style={{ textTransform: "capitalize" }}>{row.name}</h2>
          <h5 className={classes.description}>{row.description}</h5>
        </TableCell>
        <TableCell align="right">
          <ButtonGroup>
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Button
              id={row.id}
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteClick(row.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    </div>
  );
}
