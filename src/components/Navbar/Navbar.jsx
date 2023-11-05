import React, {useState, useSyncExternalStore} from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/bookgram.png"
import {HiOutlineMenualt3} from "react-icons/hi";

const Navbar = () => 
{
const [toggleMenu, SetToggleMenu] = useState(false);
const handleNavbar = () => SetToggleMenu (!toggleMenu);

    return (
        <nav className= 'navbar' id ="navbar">
            <div className='container navbar-content flex'>
                <div className = 'brand-and-toffler flex-sb'>
                    <Link to = "/" className = 'navbar-brand flex>'>
                    <img src = {logoImg} alt = "site logo" />
                    <span className = 'text-uppercase fw-7 fs-24 ls-1'>BookGram</span>
                    </Link>
                    <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
                        <HiOutlineMenualt3 size = {35} style = {{color: '${toggleMenu ? "#'}}
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar