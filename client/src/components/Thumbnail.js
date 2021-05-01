import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url(http://steaque.themezinho.net/wp-content/uploads/2020/07/slide03.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "fit",
      backgroundPosition: "bottom right",
    },
  },
  titleBox: {
    width: "55vw",
    justify: "left",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  title: {
    fontSize: "calc(20px + 40 * ((53vw + 53vh) - 600px) / 820)",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(24px + 40 * ((70vw + 53vh) - 600px) / 820)",
      marginTop: 100,
    },
  },
  button: {
    width: 300,
    borderRadius: 20,
    backgroundColor: "#d59f2f",
  },
}));

export default function Thumbnail() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root} maxWidth="xxl">
        <Grid container spacing={4} justify="left">
          <Grid className={classes.titleBox} item>
            <h1 className={classes.title}>
              Find Your Favourite Cocktails and check the recipe
            </h1>
          </Grid>
          <Grid className={classes.titleBox} item></Grid>
        </Grid>
      </Container>
    </>
  );
}
