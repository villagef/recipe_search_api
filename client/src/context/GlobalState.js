import { useState, useEffect, createContext, useContext } from "react";
import api from "../api/data";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [state, dispatch] = useState({
    isLoading: true,
    data: null,
    error: null,
    isUpdating: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const UseFetchData = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch((prev) => {
      if (prev.data) {
        return {
          ...prev,
          isUpdating: true,
        };
      }

      return {
        ...prev,
        isLoading: true,
      };
    });

    try {
      const response = await api.get("/data");
      dispatch({
        isLoading: false,
        isUpdating: false,
        error: null,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        isLoading: false,
        isUpdating: false,
        error: e,
        data: null,
      });
    }
  };

  return state;
};

export const UseAddData = (item) => {
  const addCocktail = async () => {
    await api.post("/data", item);
  };

  return addCocktail();
};

export const UseDeleteData = async (id) => {
  await api.delete(`/data/${id}`);
};
