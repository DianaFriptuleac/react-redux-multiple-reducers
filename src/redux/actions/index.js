export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_COMPANY = "GET_COMPANY";

export const addToFavourites = (company) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: company,
  };
};

export const removeFromFavourites = (company) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: company,
  };
};
//funzione asincrona

export const getSearchAction = (query) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`);
            if (response.ok) {
                const { arrayOfCompany } = await response.json();
                dispatch({
                    type: GET_COMPANY,
                    payload: arrayOfCompany,
                });
            } else {
                console.error("Errore nel recupero dei dati");
            }
        } catch (error) {
            console.error(error);
        }
    };
};
