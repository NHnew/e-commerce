import React, { useState } from 'react';
import '../css/Header.css';
import { CiShoppingBasket, CiLight } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../redux/slices/basketSlice';


const Header = () => {

    const [theme, setTheme] = useState(false);

    const { products } = useSelector(store => store.basket);

    const dispatch = useDispatch();

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (!theme) {
            root.style.backgroundColor = "#000";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "#000";
        }
    };


    return (
        <div className='header'>
            <Link to='/' className='flex-row'>
                <img className='logo' src={Logo} alt="logo" />
                <p className='logo-text'>HN-Store</p>
            </Link>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search' />
                <div className='flex-row'>
                    {
                        theme ? <IoMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
                    }
                    <Badge onClick={() => dispatch(toggleDrawer())} badgeContent={products.length} color="error">
                        <CiShoppingBasket style={{ marginRight: '0' }} className='icon' />
                    </Badge>
                </div>
            </div>
        </div >
    );
};

export default Header;