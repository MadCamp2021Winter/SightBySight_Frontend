import React from 'react';
import './header.css';
import MyPageBtn from './MyPageBtn.js';
import { Link } from "react-router-dom";

function Header() {

    if(window.location.pathname === '/') {
        return null;
    }

    return(
        <div className='header'>
            <div className='titleBar'>
                <div className='title'>
                    <Link to='/Seats'>
                        <h1 className='titletext'>Sight by Sight</h1>
                    </Link>
                    
                </div>
                <div className='mypagebtnwrap'>
                    <MyPageBtn />
                </div>
            </div>
        </div>
    )
}

export default Header;