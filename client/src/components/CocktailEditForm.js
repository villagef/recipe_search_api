import {useContext } from 'react'
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../context/GlobalState";
import axios from 'axios';
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
    height: "100vh",
    overflowY: "scroll",
    padding: "0 20px",
    boxShadow: "4px 4px 19px -2px rgba(0,0,0,0.64)",
    zIndex: '3000'
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
    // width: "90vw",
    maxWidth: "500px",
    padding: "30px",
    margin: "30px auto",
  },
  form: {
    maxWidth: "500px",
    margin: "0 auto",
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

export default function CocktailEditForm({ row, setEdit, data, setData }) {
  const { cocktails } = useContext(GlobalContext);
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    const modified = new Date()
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");
    const id = row.id;
    const author = data.author ? data.author : row.author;
    const description = data.description ? data.description : row.description;
    const image = data.image ? data.image : row.image;
    const ingridients = data.ingridients ? data.ingridients : row.ingridients;
    const mainSpirit = data.mainSpirit ? data.mainSpirit : row.mainSpirit;
    const name = data.name ? data.name : row.name;
    const prepStyle = data.prepStyle ? data.prepStyle : row.prepStyle;
    const steps = data.steps ? data.steps : row.steps;
    const taste = data.taste ? data.taste : row.taste;
    const type = data.type ? data.type : row.type;
    const ratings = data.ratings ? data.ratings : row.ratings;

    const editedCocktail = {
      id: id,
      author: author,
      description: description,
      image: image,
      ingridients: ingridients,
      mainSpirit: mainSpirit,
      name: name,
      prepStyle: prepStyle,
      steps: steps,
      taste: taste,
      type: type,
      ratings: ratings,
      modified: modified
    };
    
    await axios.put(`https://scandalecocktails.herokuapp.com/data/${id}`, editedCocktail)
      .then(res => console.log(res))
      .catch(e => console.log(e))
      .finally(setEdit(false));
      
  };

  const handleClose = () => {
    setEdit(false);
  };

  return (
    <>
      <Modal
        className={classes.mainContainer}
        open={true}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        // style={{zIndex: '3000'}}
      >
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Container component={Paper} className={classes.formWrapper}>
            <Grid item>
              <Input
                className={classes.row}
                type="text"
                placeholder={row.name}
                onChange={handleClose}
                {...register("name", {
                  required: false,
                  min: 2,
                  maxLength: 30,
                })}
              />
            </Grid>
            <Grid item>
              <Input
                className={classes.row}
                type="text"
                placeholder={row.mainSpirit}
                {...register("mainSpirit", {
                  required: false,
                  min: 2,
                  maxLength: 20,
                })}
              />
            </Grid>
            <Grid item>
              <Input
                className={classes.row}
                type="url"
                placeholder={row.image}
                {...register("image", {
                  required: false,
                  min: 2,
                  maxLength: 200,
                })}
              />
            </Grid>
            <Grid item>
              <Input
                className={classes.row}
                type="text"
                placeholder={row.author}
                {...register("author", {
                  required: false,
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
                defaultValue={row.type}
                {...register("type", { required: false })}
              >
                <MenuItem value="classic">classic</MenuItem>
                <MenuItem value="modern classic">modern classic</MenuItem>
                <MenuItem value="tropical">tropical</MenuItem>
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
                defaultValue={row.prepStyle}
                {...register("prepStyle", { required: false })}
              >
                <MenuItem value="mixed">stirred</MenuItem>
                <MenuItem value="shaken">shaken</MenuItem>
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
                defaultValue={row.taste}
                {...register("taste", { required: false })}
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
                placeholder={row.ingridients}
                {...register("ingridients", {
                  required: false,
                  min: 2,
                  maxLength: 500,
                })}
              />
            </Grid>
            <Grid item >
              <TextareaAutosize 
                className={classes.textArea}
                aria-label="empty textarea"
                placeholder={row.steps}
                {...register("steps", {
                  required: false,
                  min: 2,
                  maxLength: 500,
                })}
              />
            </Grid>
            <Grid item>
              <TextareaAutosize
                className={classes.textArea}
                aria-label="empty textarea"
                placeholder={row.description}
                {...register("description", {
                  required: false,
                  min: 2,
                  maxLength: 500,
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
                Update Cocktail
              </Button>
            </Grid>
          </Container>
        </form>
      </Modal>
    </>
  );
}
