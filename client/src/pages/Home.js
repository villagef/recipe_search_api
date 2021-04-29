import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  UseFetchData,
  UseAddData,
  UseDeleteData,
} from "../context/GlobalState";

import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Thumbnail from "../components/Thumbnail";
import TopCocktails from "../components/SpiritCocktails";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#1a1a1a",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
    overflowX: "hiden",
  },
}));

export default function Home() {
  const classes = useStyles();
  const { isLoading, isUpdating, error, data } = UseFetchData();


  const handleAddClick = () => {
    
  };

  console.log(data);

  return (
    <div className={classes.root}>
      <Header handleAddClick={handleAddClick}/>
      <Thumbnail />
      {
        !isLoading && <TopCocktails />
      }
      <Footer />
    </div>
  );
}
