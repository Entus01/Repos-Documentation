import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
    return (
        <header className="header">
            <img className="header-logo" src={props.logo} alt="Structure Logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/standards">Standards</Link></li>
                    <li><Link to="/templates">Templates</Link></li>
                    <li><Link to="/examples">Examples</Link></li>
                </ul>
            </nav>
        </header>
    );
}