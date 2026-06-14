import { Routes, Route } from "react-router-dom";
import "./Content.css";
import { NAV_ITEMS } from "../../constants/navigation.js";
import DocumentPage from "../DocumentPage/DocumentPage.jsx";

export default function Content() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<div>Select a document</div>} />
        {NAV_ITEMS.map(({ id, path }) => (
          <Route key={id} path={path} element={<DocumentPage documentId={id} />} />
        ))}
      </Routes>
    </div>
  );
}
