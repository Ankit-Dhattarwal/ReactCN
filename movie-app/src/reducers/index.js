import { combineReducers } from "redux";

/// Make reducers function as the pure functions

import { ADD_MOVIES , ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITE, ADD_MOVIE_TO_LIST ,ADD_SEARCH_RESULT} from "../actions";

const intitalMoviesState = {
  list: [],
  favourites: [],
  showFavourite: false
}
export function movies(state = intitalMoviesState, action) {
// if(action.type === ADD_MOVIES){
//   return {
//     ...state,
//     list: action.movies,
//   }
// }
// return state; 

  switch(action.type){
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies
      }
    case ADD_TO_FAVOURITE:
      return{
        ...state,
        favourites: [action.movie, ...state.favourites]
      }
      case REMOVE_FROM_FAVOURITE:
        const filteredArray = state.favourites.filter(
          movie => movie.Title !== action.movie.Title
        );
        return{
          ...state,
          favourites: filteredArray 
        }
        case SET_SHOW_FAVOURITE:
          return {
            ...state,
            showFavourite: action.val
          }
        case ADD_MOVIE_TO_LIST:
          return {
            ...state,
            list: [action.movie, ...state.list]
          }
    default:
      return state;  
  }
}

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search (state = initialSearchState, action){
  
  switch(action.type){
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true 
      }
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false
      }
    default:
      return state;  
  }
}

// const initialRootState = {
//   movies: intitalMoviesState,
//   search: initialSearchState
// }

// export default function rootReducer (state = initialRootState, action){
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   }
// }

/// we not need to create to reducer function to combine reducer bcz reducer also provide 
export default  combineReducers({
  movies: movies,
  search: search
});

