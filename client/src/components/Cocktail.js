import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import StarIcon from "@material-ui/icons/Star";
import Rating from "@material-ui/lab/Rating";
import {
  Modal,
  Grid,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    maxWidth: "1200px",
    height: "90vh",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    "&::-webkit-scrollbar": {
      display: "none",
    },
    fontFamily: "Poppins",
  },
  image: {
    height: 320,
    width: 420,
    margin: "20px 0",
    borderRadius: 10,
    maxWidth: 420,
    boxShadow: "4px 4px 19px -2px rgba(0,0,0,0.64)",
    [theme.breakpoints.up("sm")]: {
      height: 420,
      marginLeft: 50,
    },
  },
  hashtags: {
    color: "#d59f2f",
  },
  title: {
    textTransform: "capitalize",
  },
  description: {
    fontSize: "0.9rem",
    textAlign: "justify",
    marginBottom: "20px",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      padding: "30px 30px 0 0",
    },
  },
  h2: {
    color: "#d59f2f",
  },
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  first: {
    width: "100%",
  },
}));

export default function Cocktail({ item, showModal, setShowModal }) {
  const classes = useStyles();

  const handleRatings = (value) => {
    const sum = value.reduce((total, num) => total + num);
    const rating = sum / value.length;
    return rating.toFixed(1);
  };

  handleRatings(item.ratings);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Grid container className={classes.paper}>
          <Grid className={classes.first} item>
            <h4 className={classes.hashtags}>
              #{item.prepStyle} #{item.taste} #{item.mainSpirit}
            </h4>
            <h1 className={classes.title}>{item.name}</h1>
            <h6 style={{ color: "gray" }}>
              Written by {item.author} | Updated {item.modified}
            </h6>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating style={{ color: "#d59f2f", marginTop: "10px" }} name="read-only" value={handleRatings(item.ratings)} readOnly />
            </Box>
          </Grid>
          <Grid className={classes.row} item>
            <CardMedia
              className={classes.image}
              image={item.image}
              title={item.name}
            />
          </Grid>
          <Grid className={classes.row} item>
            <div className={classes.description}>{item.description}</div>
          </Grid>
          <Grid item>
            <div>
              <h2 className={classes.hashtags}>Igridients</h2>
              <span>-----------------------</span>
              <List
                component="ul"
                className={classes.root}
                aria-label="ingridients"
              >
                {item.ingridients.map((i) => (
                  <ListItem>
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                    <ListItemText primary={i} />
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              <h2 className={classes.hashtags}>Steps</h2>
              <span>-----------------------</span>
              <List component="ol" className={classes.root} aria-label="steps">
                {item.steps.map((i, index) => (
                  <ListItem>
                    <ListItemIcon>
                      {++index}
                      {/* <ArrowRightAltIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary={i} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
