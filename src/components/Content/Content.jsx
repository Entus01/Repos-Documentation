import { Routes, Route } from "react-router-dom";
import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <Routes>
        <Route path="/readme" element={<div>README Content</div>} />
        <Route path="/glossary" element={<div>Glossary Content</div>} />
        <Route path="/rules" element={<div>Rules Content</div>} />
        <Route path="/structure" element={<div>Structure Content</div>} />
        <Route path="/architecture" element={<div>Architecture Content</div>} />
        <Route path="/decisions" element={<div>Decisions Content</div>} />
        <Route path="/deployment" element={<div>Deployment Content</div>} />
        <Route path="/roadmap" element={<div>Roadmap Content</div>} />
        <Route path="/changelog" element={<div>Changelog Content</div>} />
      </Routes>
    </div>
  );
}
