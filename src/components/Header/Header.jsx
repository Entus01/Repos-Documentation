import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
    return (
        <header className="header">
            <img className="header-logo" src={props.logo} alt="Structure Logo" />
            <h1 className="header-title">{props.title}</h1>
            <div>searchbar here</div>
        </header>
    );
}