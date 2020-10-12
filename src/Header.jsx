import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


//ES6 arrow header const header =()=>
function Header({backButton})  {
    const history =useHistory();
    
return (
    <div className="header">
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon className="header__icon" fontSize="large" />
            </IconButton>
        ) : (
            <IconButton>
                <AccountCircleIcon className="header__icon" fontSize="large" />
            </IconButton>
        )}
        <Link to="/">
            <img
                className="header__logo"
                src="https://www.freelogodesign.org/file/app/client/thumb/c01a4d95-80ea-44a8-a590-21c4d8b140f2_200x200.png?1600112149245"
                alt="logo"
            />
        </Link>

        <Link to="/chat">
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
        </Link>
    </div>
);
}
export default Header;