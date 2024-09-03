import { ADD_TO_FAVOURITES } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  // lo stato per le aziende preferite
  content: [],
};

const myListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        // Aggiorno myList.content
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,

        content: state.content.filter((company) => company !== action.payload), // Filtro myList.content
      };

    default: {
      return state;
    }
  }
};

export default myListReducer;
