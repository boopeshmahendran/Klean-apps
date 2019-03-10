import React from "react";
import logo from "../images/Logo.svg";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;