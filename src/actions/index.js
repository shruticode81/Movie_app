//action type
export const ADD_MOVIES='ADD_MOVIES'; 
export const ADD_FAVOURITE='ADD_FAVOURITE'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

//action creator
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}
export function addMovieToList(movie)
{
    let obj={type:ADD_MOVIE_TO_LIST ,
        movie
  }

  return obj;
}

export function addFAVOURITE(movie){
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFromFavourites(movie){
    return{
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites(val){
    return{
        type: SET_SHOW_FAVOURITES,
        val
    }
}
export function addSearchResult(movie)
{
    let obj={
        type:ADD_SEARCH_RESULT,
        movie
    }

    return obj;
}

export function handleMovieSearch(movie)
{
      return function(dispatch)
      {   
          // this fetch api is async call
          fetch(`http://www.omdbapi.com/?t=${movie}&apikey=887f6ad1`)
          .then(response=>response.json())
          .then(movie=> {
                 console.log('movie',movie);
                 dispatch(addSearchResult(movie));
            })
            // {
                
            // })
      }
}