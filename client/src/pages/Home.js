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
  const newCocktail = {
    name: "old fashioned",
    mainSpirit: "burbon",
    type: "classic",
    prepStyle: "stirred",
    ingridients: [
      "4 dashes Angostura bitters",
      "1/4 ounce brown sugar syrup (equal parts brown sugar to water)",
      "1 orange peel",
      "1 Luxardo maraschino cherry",
      "2 ounces brown-butter-washed bourbon",
      "Garnish: 2 orange peels",
      "Garnish: 1 Luxardo maraschino cherry",
    ],
    image:
      "https://www.liquor.com/thmb/Gv8EQfh1KK0LNDj5m0X4h_a981Y=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brown-butter-old-fashioned-720x720-primary-76a57ce1bb6b4e74ae3aa1f06be2933c.jpg",
    steps: [
      "In a rocks glass, muddle the bitters, brown sugar syrup, orange peel and cherry.",
      "Add the bourbon and 1 large ice cube and stir until well-chilled",
      "Garnish with an orange peel “rose” by rolling 2 swaths of orange peels with a Luxardo maraschino cherry inside.",
    ],
    modified: "23.04.2021",
    ratings: [4, 5, 5, 5, 4],
    author: "Filip",
    description:
      "The Old Fashioned, with its proven formula of whiskey, sugar and bitters, is about as good as a drink can get. But bartenders prove time and time again that there’s more than one way to make an Old Fashioned. Modern classics like the tequila- and mezcal-laced Oaxacan Old Fashioned come to mind, as do varieties like the Rum Old Fashioned. Those are just the tip of the boozy iceberg though. Because all over the world bartenders tweak the recipe to their liking, serving countless unique iterations of this old-school drink.",
    taste: "dry",
    alcoholic: true,
  };

  const handleAddClick = () => {
    UseAddData(newCocktail);
  };

  const handleDeleteClick = (e) => {
    UseDeleteData(e.target.id);
  };

  console.log(data);

  return (
    <div className={classes.root}>
      <Header handleAddClick={handleAddClick}/>
      <Thumbnail />
      <TopCocktails />
      <Footer />
    </div>
  );
}
