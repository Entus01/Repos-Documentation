import { Routes, Route } from "react-router-dom";
import "./Content.css";
import { NAV_ITEMS } from "../../constants/navigation.js";

export default function Content() {
  return (
    <main className="content">
      <Routes>
        <Route
          path="/Repos-Documentation"
          element={
            <article className="document document--empty">
              <h1>Virtual Library</h1>
              <p>Select a document from the catalog to begin reading.</p>
            </article>
          }
        />

        {NAV_ITEMS.map(({ id, path, name, document: Document }) => (
          <Route
            key={id}
            path={path}
            element={
              <article className="document">
                <h1>{name}</h1>
                <Document />
              </article>
            }
          />
        ))}
      </Routes>
    </main>
  );
}
