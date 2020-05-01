import React from 'react';
import  './Nav.css';
import '../index.css'

const Nav =({globalChange,indiaChange})=>{
    return(
        
         <ul class='nav'>
        <li class='c'>
        <a onClick={globalChange}>GLOBAL</a>
        </li>
        <li class='c1'>
        <a onClick={indiaChange}>INDIA</a>
        </li>
        </ul>
        
    )
}
export default Nav;