import React from 'react'
import { Link } from 'react-router-dom';
class NavBar extends React.Component{

    render(){
        return(
            <div>
                <Link to="/order-summary">Order Summary</Link>
            </div>
        )
    }
}


export default NavBar;