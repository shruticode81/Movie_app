//this component contain movie cards to display 
import React from 'react';
import { addFAVOURITE, removeFromFavourites, REMOVE_FROM_FAVOURITES } from '../actions';

class MovieCard extends React.Component{
   //make an event listener to handle favourites
   handleFavouriteClick = () =>{
       const {movie} = this.props;
       this.props.dispatch(addFAVOURITE(movie))
   }
   handleUnFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFromFavourites(movie))
   }

    render(){
        const {movie,isFavourite} = this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imbRating}</div>
                        {
                            isFavourite
                            ? <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite</button>
                            :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default MovieCard