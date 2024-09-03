export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const GET_COMPANY = 'GET_COMPANY'

export const addToFavourites = (company) =>{
    return {
    type: ADD_TO_FAVOURITES,
     payload: company
    }
}

export const removeFromFavourites = (company) =>{
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload:company,
    }
}

export const getSearchAction = () =>{
    return(dispatch, getState) =>{
        fetch('https://strive-benchmark.herokuapp.com/api/jobs?search=')
        .then((response) =>{
            if(response.ok) {
                return response.json()
            }else {
                throw new Error('errore nel recupero dati')
            }
        })
        .then((arrayOfCompany) =>{
            dispatch({
                type: GET_COMPANY,
                payload:arrayOfCompany,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}