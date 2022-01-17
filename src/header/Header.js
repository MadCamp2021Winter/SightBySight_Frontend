import React from 'react';
import './header.css';
import MyPageBtn from './MyPageBtn.js';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Icon } from '@mui/material';

const Header = () => {

    const nickName = "testnickname"

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
                <div className='mybtnwrap'>
                    <Link to='/'>
                        <LogoutIcon fontSize="large" className="mybtn"/>
                    </Link>
                    <Link to = {`/MyPage/${nickName}`}>
                        <Avatar className="mybtn1" src="/broken-image.jpg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;