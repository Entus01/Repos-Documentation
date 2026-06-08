import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import { NAV_ITEMS } from "../../constants/navigation.js";

export default function Header(props) {
    return (
        <header className="header">
            <img className="header-logo" src={props.logo} alt="Structure Logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {NAV_ITEMS.map(doc => (
                        <li key={doc.id}>
                            <Link to={doc.path}>{doc.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}