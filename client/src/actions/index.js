import axios from 'axios';

import { GET_FAVOURITE, ADD_FAVOURITE, GET_RESULTS, REMOVE_FAVOURITE, FILTER_FAVOURITE, LOADING  } from './types'

export const getResults = (data) => {
    return function(dispatch) {
        axios
            .get('/api/results?artist=' + data)
            .then(res => dispatch({ type: GET_RESULTS, payload: res.data}),
                   err => dispatch({ type: GET_RESULTS, payload: err}))
            .catch(error =>  dispatch({ type: GET_RESULTS, payload: error}));
    }
};

export const addFavourite = (item) => {
    return function(dispatch) {
       dispatch({ type: ADD_FAVOURITE, payload: item});
    }
};

export const removeFavourite = (item) => {
    return function(dispatch) {
       dispatch({ type: REMOVE_FAVOURITE, payload: item});
    }
};

export const filterFavourite = (item) => {
    return function(dispatch) {
       dispatch({ type: FILTER_FAVOURITE, payload: item});
    }
};

export const getFavourite = (data) => {
    return function(dispatch) {
       dispatch({ type: GET_FAVOURITE, payload: data});
    }
};

export const loading = (item) => {
    return function(dispatch) {
       dispatch({ type: LOADING, payload: item});
    }
};