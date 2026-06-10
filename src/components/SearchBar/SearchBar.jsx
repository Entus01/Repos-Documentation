import React from "react";
import "./SearchBar.css";
import { useSearch } from "../../hooks/useSearch.js";

export default function SearchBar({
    placeholder = "Search...",
}) {
    const { search, setSearch } = useSearch();

    return (
        <div className="searchbar">
            <input
                className="searchbar__input"
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}