import { makeStyles } from "@material-ui/core/styles";
import {Button, Container, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


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
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  titleBox: {
    width: "55vw",
    justify: "left",
  },
  title: {
    fontSize: 'calc(20px + 40 * ((53vw + 53vh) - 600px) / 820)',
    color: "white",
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
          <Grid className={classes.titleBox} item>
          <Button
              variant="contained"
              size="large"
              className={classes.button}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
