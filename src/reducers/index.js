//reducers are pure functions
import {ADD_FAVOURITE, ADD_MOVIES,REMOVE_FROM_FAVOURITES} from '../actions'
const initialMovieState={
    list:[],
    favourites:[]
}
export default function movies(state=initialMovieState,action){
    // if(action.type === ADD_MOVIES){
    //     return{
    //         ...state ,
    //         list:action.movies   
    //     }
       
    
    // }
    // return state;
    //iNSTEAD of is else ladder let use switch case
    //it's more readiable
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray=state.favourites.filter(
                movie=>movie.Title!==action.movie.Title
            );
            return{
                ...state,
                favourites: filteredArray
            }
        default:
            return state;
    }
}