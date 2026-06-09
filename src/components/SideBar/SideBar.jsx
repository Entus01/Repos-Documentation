import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { NAV_ITEMS, CATEGORIES } from "../../constants/navigation.js";

export default function SideBar() {
  const [activeCategory, setActiveCategory] = useState(null);

  function toggleCategory(categoryId) {
    setActiveCategory((prevCategory) => (prevCategory === categoryId ? null : categoryId));
  }

  return (
    <>
      <h2 className="sidebar-title">Library Catalog</h2>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.id}>
            <h3 onClick={() => toggleCategory(category.id)}>{category.name}</h3>
            {activeCategory === category.id && (
              <ul>
                {NAV_ITEMS.filter((item) => item.category === category.name)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <li key={item.id}>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
