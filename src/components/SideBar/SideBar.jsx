import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { NAV_ITEMS, CATEGORIES } from "../../constants/navigation.js";

export default function SideBar() {
  const [activeCategory, setActiveCategory] = useState(null);

  function toggleCategory(categoryId) {
    setActiveCategory((prevCategory) =>
      prevCategory === categoryId ? null : categoryId,
    );
  }

  function getCategoryDocuments(categoryName) {
    return NAV_ITEMS
      .filter((item) => item.category === categoryName)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Library Catalog</h2>
      <ul className="sidebar__category-list">
        {CATEGORIES.map((category) => (
          <li className="sidebar__category-item" key={category.id}>
            <button
              className={
                `sidebar__category-title ${
                  activeCategory === category.id
                    ? "sidebar__category-title--expanded"
                    : ""
                }`
              }
              type="button"
              aria-expanded={activeCategory === category.id}
              onClick={() => toggleCategory(category.id)}
            >
              {category.name}
            </button>
            {activeCategory === category.id && (
              <ul className="sidebar__documents-list">
                {getCategoryDocuments(category.name).map((doc) => (
                  <li className="sidebar__document-item" key={doc.id}>
                    <Link to={doc.path} className="sidebar__document-link">
                      {doc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
