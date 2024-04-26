/// Make reducers function as the pure functions

import { ADD_MOVIES } from "../actions";

const intitalMoviesState = {
  list: [],
  favourites: []
}
export default function movies(state = intitalMoviesState, action) {
if(action.type === ADD_MOVIES){
  return {
    ...state,
    list: action.movies,
  }
}
return state; 
}

