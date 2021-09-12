import { combineReducers } from "redux";
import { ADD_MOVIES,ADD_FAVOURITE, REMOVE_FAVOURITE,SHOW_FAVOURITE, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT } from "../Actions";

const initialMoviesState = {
    list : [],
    favourites : [],
    showFavourites: false,
}

// movie reducer
export function movies(state=initialMoviesState,action){
    console.log("movies reducer") ;
    // if(action.type === ADD_MOVIES){
    //     // {console.log(action)} 
    //     // action =  type : ADD_MOVIES,movies : movies  from action index.js file
    //     return {
    //         ...state,
    //         list : action.movies
    //     } ;
    // }
    switch(action.type){
        case ADD_MOVIES : 
            return{
                ...state,
                list : action.movies
            }
        case ADD_FAVOURITE : 
            return{
                ...state,
                favourites : [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE :
            const filteredArray = state.favourites.filter((movie) => movie.Title!== action.movie.Title) ;
            return{
                ...state,
                favourites : filteredArray
            }
        case SHOW_FAVOURITE :
            return{
                ...state,
                showFavourites : action.val
            }   
        case ADD_MOVIE_TO_LIST :
            return{
                ...state,
                list : [action.movie,...state.list]
            }    
        default : 
            return state;
    }
}

// search reducer
const initialSearchState = {
    result : {},
    showSearchResults : false
}

export function search(state=initialSearchState,action){
    // console.log("search reducer");
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result : action.movie,
                showSearchResults : true
            }
        case ADD_MOVIE_TO_LIST :
            return{
                ...state,
                showSearchResults : false
            } 
        default : 
            return state ;
    }
}


// combining reducers movie and search
// const initialRootState = {
//     movies : initialMoviesState,
//     search : initialSearchState
// }

// export default function rootReducer(state=initialRootState,action){
//     return {
//         movies : movies(state.movies,action),
//         search : search(state.search,action),
//     }
// }

export default combineReducers({
    movies,
    search
})