//reducers are pure functions
import {combineReducers} from 'redux';
import {
        ADD_FAVOURITE,
        ADD_MOVIES,
        REMOVE_FROM_FAVOURITES,
        SET_SHOW_FAVOURITES,
        ADD_MOVIE_TO_LIST,
        ADD_SEARCH_RESULT
        } from '../actions'

const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state=initialMovieState,action){
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
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie,...state.list]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray=state.favourites.filter(
                movie=>movie.Title!==action.movie.Title
            );
            return{
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val // val will be either true or false
            }
        default:
            return state;
    }
}


const initialSearchState={
        result:{} 
};

export function search(state=initialSearchState,action){
    switch(action.type)
    {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie
            }
        default:
            return state;
    }
}

// const initialRootState={
//     movies:initialMovieState,
//     search:initialSearchState
// };
// export default function rootReducer(state=initialRootState,action){
//     return {
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }
export default combineReducers({
    movies: movies,
    search: search
})