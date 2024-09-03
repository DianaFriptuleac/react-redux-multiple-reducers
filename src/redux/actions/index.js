export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_COMPANY = "GET_COMPANY";
export const GET_COMPANY_JOBS = "GET_COMPANY_JOBS";

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
//funzione asincrona  per MainSection

export const getSearchAction = (query) => {
  return async (dispatch, getState) => {
    try {
      console.log("Fetching jobs for query:", query);
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`
      );
      if (response.ok) {
        const { data } = await response.json();
        console.log("Data received:", data);
        dispatch({
          type: GET_COMPANY,
          payload: data,
        });
      } else {
        console.error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.error("Errore durante la fetch:", error);
    }
  };
};
//funzione asincrona per CompanySearchResults
export const getCompanyJobs = (company) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${company}`);
        if (response.ok) {
          const { data } = await response.json();
          dispatch({
            type: GET_COMPANY_JOBS,
            payload: data,
          });
        } else {
          console.error("Errore nel recupero dei dati");
        }
      } catch (error) {
        console.error("Errore durante la fetch:", error);
      }
    };
  };