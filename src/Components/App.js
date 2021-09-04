import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard" ;
import Navbar from "./Navbar" ;
import {addMovies} from "../Actions/index" ;
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

  render(){
    const movies = this.props.store.getState();
    console.log("render");
    return (
      <div className="App">
        <Navbar/>
        <div className="main">

          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <br/>

          <div className="list">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.Title}/>
            ))}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
