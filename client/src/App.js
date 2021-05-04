import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function App() {
  const dispatch = useDispatch();

  function getData() {
    return (dispatch) => {
      axios
        .get("https://scandalecocktails.herokuapp.com/data/")
        .then((res) =>
          dispatch({
            type: "FETCH_DATA",
            data: res.data,
          })
        )
        .catch((err) => console.log(err));
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
