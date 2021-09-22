import React from "react";
import { data as moviesList } from "../data";
import MovieCard from "./MovieCard" ;
import Navbar from "./Navbar" ;
import {addMovies, showFavourites} from "../Actions/index" ;
import {StoreContext} from "../index" ;
import { Component } from "react";

class App extends React.Component {
  componentDidMount(){
    // make api call
    // dispatch action
    // const {store} = this.props;
    // store.subscribe(()=>{
    //   console.log("updated");
    //   this.forceUpdate();
    // })

    // store.dispatch(addMovies(data)) ;
    // console.log(this.props.store.getState());
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.dispatch(addMovies(moviesList));

  }

  isMovieInFavourites =(movie) => {
    const {movies} = this.props.store.getState() ;
    const index = movies.favourites.indexOf(movie) ;
    if(index !== -1){
      // found the movie
      return true;
    }
    return false ;
  }
  
  changeTab=(val) =>{
    this.props.store.dispatch(showFavourites(val)) ;
  }

  render(){
    const {movies,search} = this.props.store.getState() ; // {movies : {},search:{}}
    const {list,favourites=[],showFavourites=[]}= movies;
    console.log("render",this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;
    
    return(
      <div className="App">
      <Navbar search={search} />
      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${showFavourites ? '' : 'active-tabs'}`}
            onClick={() => this.changeTab(false)}
          >
            Movies
          </div>
          <div
            className={`tab ${showFavourites ? 'active-tabs' : ''}`}
            onClick={() => this.changeTab(true)}
          >
            Favourites
          </div>
        </div>
        <br></br>

        <div id="list">
          {displayMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.imdbID}
              dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieInFavourites(movie)}
            />
          ))}
          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display! </div>
          ) : null}
        </div>
      </div>
    </div>

      // <StoreContext.Consumer>
      //   {(store) => {
      //     return (
      //       <div className="App">
      //         <Navbar dispatch={this.props.store.dispatch} search={search}/>
      //         <div className="main">
      
      //           <div className="tabs">
      //             <div className={`tab ${showFavourites ? '': 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
      //             <div className={`tab ${showFavourites ? 'active-tabs': ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
      //           </div>
      //           <br/>
      
      //           <div className="list">
      //             {displayMovies.map((movie) => (
      //               <MovieCard movie={movie} 
      //               key={movie.Title} 
      //               dispatch={this.props.store.dispatch}
      //               isFavourite = {this.isMovieFavourite(movie)}
      //               />
      //             ))}
      //           </div>
      //           {displayMovies.length === 0 ? <div className="no-movies">No Movies to Display</div> : ""}
      //         </div>
      //       </div>
      //     );
      //   }}
      // </StoreContext.Consumer>
    ) 
  }
}

class appWrapper extends Component{
  render(){
    return(
      <StoreContext.Consumer>
        {(store) => <App store={store}/>}
      </StoreContext.Consumer>
    )
  }
}
export default appWrapper ;
