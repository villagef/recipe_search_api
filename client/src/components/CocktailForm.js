import { useForm } from "react-hook-form";
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  TextField,
  Radio,
  Select,
  Container,
  Modal,
  Switch,
  Input,
  InputLabel,
  TextareaAutosize,
  Checkbox
} from "@material-ui/core";

export default function CocktailForm({ add, setAdd }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      const ratings = [0];
      const newCocktail = {...data, ratings};
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
  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              backgroundColor: "white",
            }}
          >
            <Grid item>
              <Input
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
              <InputLabel htmlFor="outlined-age-native-simple">
                Cocktail Type
              </InputLabel>
              <Select {...register("type", { required: true })}>
                <MenuItem value="classic">classic</MenuItem>
                <MenuItem value=" modern classic"> modern classic</MenuItem>
                <MenuItem value=" tropical"> tropical</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel htmlFor="outlined-age-native-simple">
                Prep Style
              </InputLabel>
              <Select {...register("prepStyle", { required: true })}>
                <MenuItem value="mixed">stirred</MenuItem>
                <MenuItem value=" shaken"> shaken</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel htmlFor="outlined-age-native-simple">
                Cocktail Taste
              </InputLabel>
              <Select {...register("taste", { required: true })}>
                <MenuItem value="dry">dry</MenuItem>
                <MenuItem value="semi-dry">semi-dry</MenuItem>
                <MenuItem value="semi-sweet">semi-sweet</MenuItem>
                <MenuItem value="sweet">sweet</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <TextareaAutosize
                style={{ width: "100%", minHeight: "80px", fontSize: "1rem" }}
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
                style={{ width: "100%", minHeight: "80px", fontSize: "1rem" }}
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
                style={{ width: "100%", minHeight: "80px", fontSize: "1rem" }}
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
            <InputLabel htmlFor="outlined-age-native-simple">
                Alcoholic
              </InputLabel>
              <input type="checkbox" placeholder="alkoholic" {...register("alcoholic")} />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                dasdasd
              </Button>
            </Grid>
          </Container>
        </form>
      </Modal>
    </div>
  );
}
