//This component will contain search box
import React from 'react';
//import {data} from '../data';
import {addMovieToList,handleMovieSearch} from '../actions'

class Navbar extends React.Component{

    constructor()
    {
        super();
        this.state=
        {
            showSearchResult:false,
            searchText:''
        }
    }
    handleAddToMovies=(movie)=>
    {    console.log('adding result to movie',movie);
          this.props.dispatch(addMovieToList(movie));
          this.setState({showSearchResult:false});
    }

    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }
    handleSearch=()=>
    {   console.log('in  nav search',this.props.dispatch);
          const{searchText}=this.state;
          this.props.dispatch(handleMovieSearch(searchText));
          this.setState({showSearchResult:true})

    }
    render(){
        const {showSearchResult}=this.state;
        const {result} = this.props.search;
        console.log('in nav props',this.props);
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {
                        showSearchResult && 
                        <div className='search-results'>
                            <div className='search-result'>
                                <img src={result.Poster} alt='search-pic' />
                                <div className='movie-info'>
                                    <span>{result.Title}</span>
                                    <button onClick={()=>this.handleAddToMovies(result)}>add To Movies</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Navbar