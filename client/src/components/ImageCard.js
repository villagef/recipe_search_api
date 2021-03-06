import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardMedia, CardContent, Card } from "@material-ui/core";
import Cocktail from "./Cocktail";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 420,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      maxWidth: "420px",
    },
  },
  media: {
    height: "420px",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.6rem",
    color: "#fff",
    textTransform: "capitalize",
  },
  spirit: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "#d59f2f",
    textAlign: "left",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
}));

export default function ImageCard({ data }) {
  const classes = useStyles();

  const [currentCocktail, setCurrentCocktail] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleModal = (e) => {
    setShowModal(true);
    setCurrentCocktail(data);
  };

  return (
    <>
      <Card
        className={classes.root}
        accessKey={data.id}
        id={data.id}
        onClick={handleModal}
      >
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.name}
        />
        <CardContent>
          <Typography variant="h6" component="h3" className={classes.spirit}>
            #{data.mainSpirit} #{data.prepStyle}
          </Typography>
          <Typography variant="h5" component="h1" className={classes.title}>
            {data.name}
          </Typography>
        </CardContent>
      </Card>
      {showModal && (
        <Cocktail
          item={currentCocktail}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
