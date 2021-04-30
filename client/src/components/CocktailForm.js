import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Button,
  MenuItem,
  Select,
  Container,
  Modal,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "100vh",
    overflowY: "scroll",
    padding: "0 20px",
    boxShadow: "4px 4px 19px -2px rgba(0,0,0,0.64)",
  },
  list: {
    width: "100%",
    height: "100%",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "auto",
    },
  },
  row: {
    width: "100%",
    margin: "10px 0",
    padding: "10px",
  },
  formWrapper: {
    width: "90vw",
    maxWidth: "500px",
    padding: "30px",
    margin: "30px 0",
  },
  textArea: {
    padding: "10px",
    width: "100%",
    minHeight: "80px",
    fontSize: "1rem",
    margin: "10px 0",
  },
  btn: {
    width: "100%",
  },
}));

export default function CocktailForm({ add, setAdd }) {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const ratings = [0];
    const newCocktail = { ...data, ratings };
    console.log(newCocktail);
  };
  const handleClose = () => {
    setAdd(false);
  };

  const today = new Date()
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");

  return (
    <>
      <Modal
        className={classes.mainContainer}
        open={true}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container component={Paper} className={classes.formWrapper}>
            <Grid item>
              <Input
                className={classes.row}
                type="text"
                placeholder="Cocktail Name"
                {...register("name", {
                  required: true,
                  min: 2,
                  maxLength: 30,
                })}
              />
            </Grid>
            <Grid item>
              <Input
                className={classes.row}
                type="text"
                placeholder="Main Spirit"
                {...register("mainSpirit", {
                  required: true,
                  min: 2,
                  maxLength: 20,
                })}
              />
            </Grid>
            <Grid item>
              <Input
                className={classes.row}
                type="url"
                placeholder="Image URL"
                {...register("image", {
                  required: true,
                  min: 2,
                  maxLength: 200,
                })}
              />
            </Grid>
            <Grid item>
              <Input
                className={classes.row}
                type="text"
                placeholder="Author"
                {...register("author", {
                  required: true,
                  min: 2,
                  maxLength: 30,
                })}
              />
            </Grid>
            <Grid item>
              <InputLabel
                className={classes.row}
                htmlFor="outlined-age-native-simple"
              >
                Cocktail Type
              </InputLabel>
              <Select
                className={classes.row}
                {...register("type", { required: true })}
              >
                <MenuItem value="classic">classic</MenuItem>
                <MenuItem value=" modern classic"> modern classic</MenuItem>
                <MenuItem value=" tropical"> tropical</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel
                className={classes.row}
                htmlFor="outlined-age-native-simple"
              >
                Prep Style
              </InputLabel>
              <Select
                className={classes.row}
                {...register("prepStyle", { required: true })}
              >
                <MenuItem value="mixed">stirred</MenuItem>
                <MenuItem value=" shaken"> shaken</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel
                className={classes.row}
                htmlFor="outlined-age-native-simple"
              >
                Cocktail Taste
              </InputLabel>
              <Select
                className={classes.row}
                {...register("taste", { required: true })}
              >
                <MenuItem value="dry">dry</MenuItem>
                <MenuItem value="semi-dry">semi-dry</MenuItem>
                <MenuItem value="semi-sweet">semi-sweet</MenuItem>
                <MenuItem value="sweet">sweet</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <TextareaAutosize
                className={classes.textArea}
                aria-label="empty textarea"
                placeholder="Ingridients (separate by ';')"
                {...register("ingridients", {
                  required: true,
                  min: 2,
                  maxLength: 500,
                })}
              />
            </Grid>
            <Grid item>
              <TextareaAutosize
                className={classes.textArea}
                aria-label="empty textarea"
                placeholder="Steps (separate by ';')"
                {...register("steps", {
                  required: true,
                  min: 2,
                  maxLength: 500,
                })}
              />
            </Grid>
            <Grid item>
              <TextareaAutosize
                className={classes.textArea}
                aria-label="empty textarea"
                placeholder="Description (max 500 signs)"
                {...register("steps", {
                  required: true,
                  min: 2,
                  maxLength: 500,
                })}
              />
            </Grid>
            <Grid item>
              <Input
                type="text"
                value={today}
                disabled
                {...register("modified", {
                  required: false,
                })}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                type="submit"
              >
                Add Cocktail
              </Button>
            </Grid>
          </Container>
        </form>
      </Modal>
    </>
  );
}
