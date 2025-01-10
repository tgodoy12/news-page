import React from "react";
import Logo from "../../news-homepage-main/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = ["Home", "New", "Popular", "Trending", "Categories"]

    return(
        <nav className="navbar flex py-6 justify-between">
            <div className="logo w-11">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="flex">

           {navLinks.map((link) => (
            <div className="nav-links px-5">
                <Link to="/">{link}</Link>
            </div>
           ))}
            </div>
        </nav>
    )
}

export default Navbar;