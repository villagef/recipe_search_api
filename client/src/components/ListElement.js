import {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  TableCell,
  TableRow,
  Button,
  ButtonGroup,
  Grid,
} from "@material-ui/core";
import axios from "axios";

import CocktailEditForm from './CocktailEditForm';

const useStyles = makeStyles((theme) => ({
  description: {
    display: "none",
    textOverflow: "ellipsis",
    whiteSpace: "wrap",
    overflow: "hidden",
    width: "100%",
    height: "50px",
    color: "gray",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  image: {
    width: "80px",
    borderRadius: "50%",
    boxShadow: "4px 4px 19px -2px rgba(0,0,0,0.64)",
  },
  buttons: {
    marginTop: 10,
  },
}));

export default function ListElement({ row, data, setData }) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false)

  async function handleDeleteClick(id) {
    await axios.delete(`https://scandalecocktails.herokuapp.com/data/${id}`);
    const newData = data.filter((d) => d.id !== id);
    console.log(newData);
    setData(newData);
  }

  const handleEditClick = () => {
    setEdit(true)
  }

  return (
    <>
      <TableRow>
        <TableCell scope="row">
          <img className={classes.image} src={row.image}></img>
        </TableCell>
        <TableCell>
          <Grid item>
            <h2 style={{ textTransform: "capitalize" }}>{row.name}</h2>
            <h5 className={classes.description}>{row.description}</h5>
          </Grid>
          <Grid item className={classes.buttons}>
            <ButtonGroup>
              <Button id={row.id} variant="contained" color="primary" onClick={() => handleEditClick(row.id)}>
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
          </Grid>
        </TableCell>
      </TableRow>
      {
        edit && <CocktailEditForm row={row} setEdit={setEdit}/>
      }
    </>
  );
}
