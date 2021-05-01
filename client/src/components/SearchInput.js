import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "100%",
    maxWidth: "460px",
    margin: "10px auto",
    backgroundColor: "#f8b221",
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
    },
  },
}));

export default function SearchInput({ handleSearch }) {
  const classes = useStyles();

  return (
    <div>
      <SearchBar
        className={classes.search}
        onRequestSearch={handleSearch}
        placeholder="Search cocktail ..."
      />
    </div>
  );
}
