import axios from 'axios';

import { GET_FAVOURITE } from './types'
import { ADD_FAVOURITE } from './types'
import { GET_RESULTS } from './types'

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

export const getFavourite = (data) => {
    return function(dispatch) {
       dispatch({ type: GET_FAVOURITE, payload: data});
    }
};