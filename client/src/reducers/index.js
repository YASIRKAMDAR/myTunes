import { combineReducers } from 'redux';
import favouritesReducer from './favouritesReducer';
import albumsReducer from './albumsReducer';

export default combineReducers({
    favourites: favouritesReducer,
    results: albumsReducer,
});