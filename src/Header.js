import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header() {
    return (
        <nav className="header">
        <Link to="/">
            <img className="header__logo" src="https://www.xxxlutz.com/wp-content/themes/xxxlutzcom/images/logo.png" alt=""/>
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput"/>
          <SearchIcon className="header__searchIcon" style={{width: 2 + 'em'}}  />
        </div>

    <div className="header__nav">

    <Link to="/filialen" className="header__link">
        <div className="header__option">
        <span>FILIALFINDER</span>
        <LocationOnIcon className="header__locationOnIcon" />
        </div>

    </Link>
    <Link to="/login" className="header__link">
        <div className="header__option">
        <span>login</span>
        <PersonIcon className="header__personIcon"  />
        </div>

    </Link>
    <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
        <ShoppingCartIcon className="header__locationOnIcon" />
        <span className="header__basketCount">0</span>
        </div>

    </Link>

    </div>
        </nav>
    )
}

export default Header
