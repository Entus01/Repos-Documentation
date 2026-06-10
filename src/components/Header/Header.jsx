import React from 'react';
import "./Header.css";

export default function Header({ logo, title }) {
    return (
        <header className="header">
            <img
                className="header__logo"
                src={logo}
                alt="Structure Logo"
            />

            <h1 className="header__title">
                {title}
            </h1>

            <div className="header__searchbar">
                searchbar here
            </div>
        </header>
    );
}