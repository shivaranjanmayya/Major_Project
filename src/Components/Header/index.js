import React from 'react';
import './styles.scss'
import logo from './../../assets/logo.png'

const Header = props => {
    return (
        <div className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <img src={logo} alt="logo"></img>
                </div>


            </div>
        </div>
    );
};

export default Header;