export default function AppReducer(state, action) {
    switch (action.type) {
      case "ADD_COCKTAIL":
        return {
          ...state,
          cocktails: [...state.cocktails, action.payload],
        };
  
      case "EDIT_COCKTAIL":
        const updatedCocktail = action.payload;
  
        const updatedCocktails = state.cocktails.map((cocktail) => {
          if (cocktail.id === updatedCocktail.id) {
            return updatedCocktail;
          }
          return cocktail;
        });
  
        return {
          ...state,
          cocktails: updatedCocktails,
        };
  
      case "REMOVE_COCKTAIL":
        return {
          ...state,
          cocktails: state.cocktails.filter(
            (cocktail) => cocktail.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };