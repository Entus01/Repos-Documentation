import { useContext } from "react";
import { SearchContext } from "../context/SearchContext.jsx";

export function useSearch() {
    return useContext(SearchContext);
}