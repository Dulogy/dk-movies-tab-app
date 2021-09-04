import React,{Component} from "react";

class MovieCard extends Component {
    render(){
        const { movie } = this.props ;
        <h1>{movie}</h1>
       

        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-image" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        <div className="favourite">
                            <button id="favourite-btn">Favourite</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard ;