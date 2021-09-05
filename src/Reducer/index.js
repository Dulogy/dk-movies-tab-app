import { ADD_MOVIES,ADD_FAVOURITE, REMOVE_FAVOURITE } from "../Actions";

const initialMoviesState = {
    list : [],
    favourites : []
}

export default function movies(state=initialMoviesState,action){
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
            return{
                ...state,
                favourites : [action.movie, ...state.favourites]
            }
        default : 
            return state;
    }
}