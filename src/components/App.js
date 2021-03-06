import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from  './MovieCard';
import { addMovies,setShowFavourites} from '../actions';
import { StoreContext } from '../index';

//import './App.css';

class App extends React.Component {
  componentDidMount(){
    //make api calls
    //dispatch action
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    store.dispatch(addMovies(data))
    console.log('STATE',this.props.store.getState());
    console.log('store info',this.props.store);
  }
  isMovieFavourite=(movie)=>{
    const {movies}=this.props.store.getState();
    //const {favourites} = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if(index!== -1){
      return true;
    }
    return false;
  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourites(val))
  }
  render(){
    const {movies,search}= this.props.store.getState();
    const {list,favourites,showFavourites} = movies; //before state was []
    //but now it's obj with movies={list [],fav[]}
    console.log('RENDER',this.props.store.getState());
    const displayMovies = showFavourites?favourites:list ;
    // return(
    //   <StoreContext.Consumer>
    //     {()=>{
          
    //     }}
    //   </StoreContext.Consumer>
    // )
    return (
      <div className="App">
        <Navbar  search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>
              Movies
            </div>
            <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie,index)=>(
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch}
                isFavourite = {this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length===0?<div className="no-movies">No movies to display!!</div>:null}
        </div>
      </div>
    );
  }
  
}
class AppWrapper extends React.Component{
  render(){
    return(
      <StoreContext.Consumer>
        {(store)=> <App store={store}/>}
      </StoreContext.Consumer>
    )
  }
}
export default AppWrapper;
