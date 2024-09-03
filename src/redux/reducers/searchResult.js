import { GET_COMPANY } from "../actions";

const initialState = {
  //l'array della ricerca
  results: [],
};

const searchResult = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      console.log("searchResult:", action.payload);
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
export default searchResult;
