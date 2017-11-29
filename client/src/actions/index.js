import axios from 'axios';

import { GET_FAVOURITE, ADD_FAVOURITE, GET_RESULTS, REMOVE_FAVOURITE  } from './types'

export const getResults = (data) => {
    return function(dispatch) {
        axios
            .get('/api/results?artist=' + data)
            .then(res => dispatch({ type: GET_RESULTS, payload: res.data}));
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

export const getFavourite = (data) => {
    return function(dispatch) {
       dispatch({ type: GET_FAVOURITE, payload: data});
    }
};