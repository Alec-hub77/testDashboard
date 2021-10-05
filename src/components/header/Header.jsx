import React from 'react'
import './header.scss';
import { MdLogout } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="wrapper">
                <div className="links">
                <span>dashboard</span>
                <span>instances</span>
                <span>pairs</span>
                <span>about</span>
                <span>help</span>
                <span>contact</span>
                </div>
                <div className="logout">
                    <IoPerson/> 
                    <button className="logoutBtn">LOGOUT <MdLogout/></button>   
                </div>
            </div>
        </div>
    )
}

export default Header
