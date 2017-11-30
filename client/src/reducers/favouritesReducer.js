import { GET_FAVOURITE,ADD_FAVOURITE, REMOVE_FAVOURITE, FILTER_FAVOURITE  } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
    case REMOVE_FAVOURITE:
        return Object.assign({}, state, {
            data: state.data.filter(v => v.collectionId !== action.payload.collectionId),
            filteredResults: state.filteredResults.filter(v => v.collectionId !== action.payload.collectionId)
        }); 
    case ADD_FAVOURITE:
        if(state == null)
        {
            return Object.assign({}, state, {
                data: [action.payload]
            });
        }
        else {
            state.data = state.data || [];
            return Object.assign({}, state, {
            data: state.data.concat(action.payload)
            }); 
        }
    case FILTER_FAVOURITE:
        state.data = state.data || [];
        var updatedList = state.data.filter(function(item){
          return item.artistName.toString().toLowerCase().search(
            action.payload.toString().toLowerCase()) !== -1;
        });
        return Object.assign({}, state, {
            filterKey: action.payload,
            filteredResults: updatedList
        }); 
    case GET_FAVOURITE:
        return action.payload || false;
    default:
        return state;
    }
}