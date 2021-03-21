//This component will contain search box
import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="search-container">
                    <input />
                    <button className="search-btn">Search</button>
                </div>
            </div>
        );
    }
}

export default Navbar