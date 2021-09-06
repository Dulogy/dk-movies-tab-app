import React,{Component } from "react";
// import {data} from "../data" ;
import {addMovieToList,handleMovieSearch} from "../Actions/index" ;
class Navbar extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            showSearchResult : false,
            searchText : ''
        }
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie)) ;
        this.setState({
            showSearchResult : false
        })
    }

    handleSearch = () => {
        const {searchText} = this.state ;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange=(e) => {
        this.setState({
            searchText : e.target.value
        })
    }

    render(){
        const {result : movie,showSearchResults} = this.props.search ;
        return(
            <div className="nav">
                <div className="search-container"> 
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResults && 
                        <div className="search-results" style={{height : '180px'}} >
                            <img src={movie.Poster} style={{height : '140px',width:"70%",marginLeft:"15%"}} alt="movie-picture"/>
                            <div style={{marginTop : "4px"}} className="movie-info">
                                <span style={{marginLeft : "10%"}}>{movie.Title + " "}</span>
                                <button style={{marginLeft:"5%"}} onClick={()=> this.handleAddToMovies(movie)}>Add To Movie</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Navbar ;