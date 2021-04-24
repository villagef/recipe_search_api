import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, CardMedia, CardContent, Card} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 420,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
    cursor: "pointer",
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
});

export default function ImageCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.name}
      />
      <CardContent>
        <Typography
          gutterTop
          variant="h7"
          component="h3"
          className={classes.spirit}
        >
          #{data.mainSpirit} #{data.prepStyle}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
          {data.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
