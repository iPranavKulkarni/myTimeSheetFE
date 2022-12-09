import React from 'react';
import {Link} from 'react-router-dom'
const Nav=()=>{
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/add">Add</Link></li>
                <li><Link to="/product">Products</Link></li>
                {/* <li><Link to="/signup">SignUp</Link></li> */}
            </ul>
            {/* header file! */}
        </div>
    )
}
export default Nav;