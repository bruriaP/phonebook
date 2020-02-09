import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import HomeIcon  from './svgIcon';
import logo from '../Img/phonebook.jpg';


function Nav(){

    return(
        
        <nav>
            <img className={classes.Logo} src={logo} alt="Logo" />
            {/* <h3 className={classes.Logo}>Logo</h3> */}
            
            <ul className={classes.navLinks}>
            <li style={{paddingleft:'0px' }}>
                <NavLink exact to='/Home'>
            Home
            </NavLink> 
                </li> 
                <li style={{paddingleft:'7rem' }}>

            <NavLink exact to='/login' activeClassName={classes.active}>
                Login
            </NavLink>
                </li>
                          
                <li>
                <NavLink exact to='/PhoneList' activeClassName={classes.active}>
                ספר טלפונים
                </NavLink>  
                
                </li>
                
                <li>
                <NavLink exact to='/Phone'>
            Phone
            </NavLink> 
                </li>
                <li style={{padding:'0.5rem' }}>
                <NavLink exact to='/about' >
            About
            </NavLink> 
                </li>    
            </ul>
        </nav>
    )
}
export default Nav;