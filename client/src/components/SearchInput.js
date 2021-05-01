import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  search: {
    width: "90%",
    maxWidth: "460px",
    margin: "0 auto",
    backgroundColor: "#f8b221",
  },
}));

export default function SearchInput({ handleSearch }) {
  const classes = useStyles();

  return (
    <div className="searchbar">
      <SearchBar
        className={classes.search}
        onRequestSearch={handleSearch}
        placeholder="Search some cocktail ..."
        autoFocus
      />
    </div>
  );
}
