import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard" ;
import Navbar from "./Navbar" ;
import {addMovies, showFavourites} from "../Actions/index" ;

class App extends React.Component {
  componentDidMount(){
    // make api call
    // dispatch action
    const {store} = this.props;
    store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })

    store.dispatch(addMovies(data)) ;
    console.log(this.props.store.getState());
  }

  isMovieFavourite =(movie) => {
    const {favourites} = this.props.store.getState() ;
    const index = favourites.indexOf(movie) ;
    if(index !== -1){
      // found the movie
      return true;
    }
    return false ;
  }
  
  onChangeTab=(val) =>{
    this.props.store.dispatch(showFavourites(val)) ;
  }

  render(){

    const {list,favourites,showFavourites}= this.props.store.getState(); //{list : [],favourites : []}
    console.log("render",this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;
    
    return (
      <div className="App">
        <Navbar/>
        <div className="main">

          <div className="tabs">
            <div className={`tab ${showFavourites ? '': 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs': ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
          <br/>

          <div className="list">
            {displayMovies.map((movie) => (
              <MovieCard movie={movie} 
              key={movie.Title} 
              dispatch={this.props.store.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies to Display</div> : ""}
        </div>
      </div>
    );
  }
}

export default App;
