import { ADD_MOVIES } from "../Actions";

const initialMoviesState = {
    list : [],
    favourites : []
}

export default function movies(state=initialMoviesState,action){
    if(action.type === ADD_MOVIES){
        {console.log("hello")}
        {console.log(action)} 
        // action =  type : ADD_MOVIES,movies : movies  from action index.js file

        {console.log(action.movies)}
        {console.log("hello")}

        return {
            ...state,
            list : action.movies
        } ;
    }
    return state;
}

