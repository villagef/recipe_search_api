import React, { createContext, useReducer, useState, useEffect } from "react";
import appReducer from "./AppReducer";
import api from "../api/data";

let initialState = {
  isLoading: true,
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cocktails, setData] = useState(null);

  const fetchData = new Promise((resolve, reject) => {
    const response = api.get("/data");
    response ? resolve(response) : reject(response);
  });

  useEffect(() => {
    fetchData.then((res) => setData(res.data)).catch((e) => console.log(e));
  }, []);

  initialState = { ...initialState, cocktails };

  const [state, dispatch] = useReducer(appReducer, initialState);

  function addCocktail(cocktail) {
    dispatch({
      type: "ADD_COCKTAIL",
      payload: cocktail,
    });
  }

  function editCocktail(cocktail) {
    dispatch({
      type: "EDIT_COCKTAIL",
      payload: cocktail,
    });
  }

  function removeCocktail(id) {
    dispatch({
      type: "REMOVE_COCKTAIL",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        cocktails: cocktails,
        isLoading: state.isLoading,
        addCocktail,
        editCocktail,
        removeCocktail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
