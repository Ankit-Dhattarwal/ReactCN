import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";

class App extends React.Component {

  componentDidMount(){
    const {store} = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    })
    /// make api call
    /// dispatch action
    store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const {favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index !== -1){
      /// found movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourite(val))
  }

  render (){
  // const movies = this.props.store.getState(); /// []
  const { list, favourites, showFavourite } = this.props.store.getState(); /// { list: [], favouties: []}

  const displayMovies = showFavourite ? favourites : list;
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourite ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourite ? 'active-tabs' : '' }`}  onClick={() => this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className="list">
          {displayMovies.map((movie, index) => (
            <MovieCard movie={movie} key={`movie-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)}/>
          ))}
        </div>
        {displayMovies.length === 0 ? <div className="no-movies">No moives to display!</div> : null}
      </div>
    </div>
  );
          }
}

export default App;
