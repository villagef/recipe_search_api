import {
  UseFetchData,
  UseAddData,
  UseDeleteData,
} from "../context/GlobalState";

export default function Home() {
  const { isLoading, isUpdating, error, data } = UseFetchData();
  const newCocktail = {
    name: "old fashioned",
    mainSpirit: "burbon",
    type: "classic",
    prepStyle: "stirred",
    ingridients: ["4 dashes Angostura bitters", "1/4 ounce brown sugar syrup (equal parts brown sugar to water)", "1 orange peel", "1 Luxardo maraschino cherry", "2 ounces brown-butter-washed bourbon", "Garnish: 2 orange peels", "Garnish: 1 Luxardo maraschino cherry"],
    "image": "https://www.liquor.com/thmb/Gv8EQfh1KK0LNDj5m0X4h_a981Y=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brown-butter-old-fashioned-720x720-primary-76a57ce1bb6b4e74ae3aa1f06be2933c.jpg",
    steps: ["In a rocks glass, muddle the bitters, brown sugar syrup, orange peel and cherry.", "Add the bourbon and 1 large ice cube and stir until well-chilled", "Garnish with an orange peel “rose” by rolling 2 swaths of orange peels with a Luxardo maraschino cherry inside."],
    modified: "23.04.2021",
    ratings: [4, 5, 5, 5, 4],
    author: "Filip",
    description: "The Old Fashioned, with its proven formula of whiskey, sugar and bitters, is about as good as a drink can get. But bartenders prove time and time again that there’s more than one way to make an Old Fashioned. Modern classics like the tequila- and mezcal-laced Oaxacan Old Fashioned come to mind, as do varieties like the Rum Old Fashioned. Those are just the tip of the boozy iceberg though. Because all over the world bartenders tweak the recipe to their liking, serving countless unique iterations of this old-school drink.",
    taste: "dry",
    alcoholic: true
  };

  const handleAddClick = () => {
    UseAddData(newCocktail);
  };

  const handleDeleteClick = (e) => {
    UseDeleteData(e.target.id);
  };

  console.log(data);

  return (
    <div className="home">
      <button onClick={handleAddClick}>POST req</button>
      {!isLoading
        ? data.map((d) => (
            <p key={d.id} id={d.id} onClick={handleDeleteClick}>
              {d.name}
            </p>
          ))
        : "loading..."}
    </div>
  );
}
