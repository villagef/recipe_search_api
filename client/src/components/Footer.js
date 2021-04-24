import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "10vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0e0e0e",
      color: 'white',
      overflowX: "hiden",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    }
  }));

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.root} maxWidth="xxl">
             © Copyright {year} by Filip Wydra
            </Container>
        </div>
    )
}
