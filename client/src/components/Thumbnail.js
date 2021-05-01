import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import backgroundImg from '../image/cocktailBackground.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${backgroundImg})`,
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
    width: "80px",
    height: "80px",
    color: "#cd992d",
    backgroundColor: "rgba(0,0,0, 0.6)",
    marginTop: "30px",
  },
}));

export default function Thumbnail() {
  const classes = useStyles();

  const handleScroll = () => {
    window[`scroll`]({ top: window.innerHeight - 60, behavior: `smooth` });
  };

  return (
    <>
      <Container className={classes.root} maxWidth="xxl">
        <Grid container spacing={4} justify="left">
          <Grid className={classes.titleBox} item>
            <h1 className={classes.title}>
              Find Your Favourite Cocktails and check the recipe
            </h1>
            <IconButton
              onClick={handleScroll}
              className={classes.button}
              size="large"
            >
              <ArrowDownwardIcon
                style={{ width: "100%", height: "100%" }}
                fontSize="inherit"
              />
            </IconButton>
          </Grid>
          <Grid className={classes.titleBox} item></Grid>
        </Grid>
      </Container>
    </>
  );
}
