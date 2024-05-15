import React, { useState } from 'react';
import '../css/Header.css';
import { CiShoppingBasket, CiLight } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";


const Header = () => {

    const [theme, setTheme] = useState(false);

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
            <div className='flex-row'>
                <img className='logo' src="./src/images/BIGfavicon.png" alt="logo" />
                <p className='logo-text'>HN-Store</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search' />
                <div className='flex-row'>
                    {
                        theme ? <IoMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
                    }
                    <CiShoppingBasket className='icon' />
                </div>
            </div>
        </div>
    );
};

export default Header;