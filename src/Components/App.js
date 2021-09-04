import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard" ;
import Navbar from "./Navbar" ;

function App() {
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
          {data.map((movie) => (
            <MovieCard movie={movie} key={movie.Title}/>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
