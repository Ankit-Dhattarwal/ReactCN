// {
//   type: "ADD_MOVIES",
//   movies: [m1, m2, m3]
// }


/// these below varbiable called action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';



/// these functions are called action creators
export function addMovies (movies) {
  return {
      type: ADD_MOVIES,
      movies: movies
    }
}

export function addFavourite (movie) {
  return {
      type: ADD_TO_FAVOURITE,
      movie
    }
}

export function removeFromFavourite (movie) {
  return {
      type: REMOVE_FROM_FAVOURITE,
      movie
    }
}

export function setShowFavourite (val) {
  return {
      type: SET_SHOW_FAVOURITE,
      val
    }
}

export function addMovieToList (movie) {
  return {
      type: ADD_MOVIE_TO_LIST,
      movie: movie
    }
}

export function handleMovieSearch (movie) {
  const url = `http://www.omdbapi.com/?apiKey=3ca5df7&t=${movie}`;

  return function (dispatch){
    fetch(url)
    .then(response => response.json())
    .then(movie => {
    console.log('movie', movie)

    /// dispatch an action 
    // dispatch({type: 'ADD_SEARCH_RESULT', movie})
     })
  }
}