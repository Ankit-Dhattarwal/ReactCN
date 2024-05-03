import React from "react";
import { connect } from "react-redux";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";

class App extends React.Component {

  componentDidMount(){

    /// make api call
    /// dispatch action
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props;

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      /// found movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourite(val))
  }

  render (){
  // const movies = this.props.store.getState(); /// []

  // const { list, favourites, showFavourite } = this.props.store.getState(); /// { list: [], favouties: []}

  const {movies, search} = this.props;/// {movies: {}, search: {}}
  const { list, favourites, showFavourite } = movies; 


  const displayMovies = showFavourite ? favourites : list;
  
  return (
    <div className="App">
      <Navbar dispatch={this.propsdispatch} search={search}/>
      <div className="main">
        <div className="tabs"> 
          <div className={`tab ${showFavourite ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourite ? 'active-tabs' : '' }`}  onClick={() => this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className="list">
          {displayMovies.map((movie, index) => (
            <MovieCard movie={movie} key={`movie-${index}`}  dispatch={this.props.dispatch} isFavourite={this.isMovieFavourite(movie)}/>
          ))}
        </div>
        {displayMovies.length === 0 ? <div className="no-movies">No moives to display!</div> : null}
      </div>
    </div>
  );
          }
}

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store) => <App store={store}/>}
//       </StoreContext.Consumer>
//     );
//   }
//  }


/// This callback funcrtion tell us what data we want from store 
 function mapStateToProps(state){
  return {
    movies: state.movies,
    search: state.movies,
  }
 }

 const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;

