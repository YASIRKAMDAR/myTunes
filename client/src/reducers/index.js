import { combineReducers } from 'redux';
import favouritesReducer from './favouritesReducer';
import albumsReducer from './albumsReducer';
import appReducer from './appReducer';

export default combineReducers({
    favourites: favouritesReducer,
    results: albumsReducer,
    app: appReducer,
});