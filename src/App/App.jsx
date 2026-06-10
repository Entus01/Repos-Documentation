import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../components/Header/Header.jsx";
import SideBar from "../components/sidebar/SideBar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import logo from "../assets/Repos-Structure.png";
import { SearchProvider } from "../context/SearchContext.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Header logo={logo} title="Repos Structure" />

        <main className="main-content">
          <SideBar className="sidebar" />

          <Routes className="content">
            <Route path="/readme" element={<div>README Content</div>} />
            <Route path="/glossary" element={<div>Glossary Content</div>} />
            <Route path="/rules" element={<div>Rules Content</div>} />
            <Route path="/structure" element={<div>Structure Content</div>} />
            <Route
              path="/architecture"
              element={<div>Architecture Content</div>}
            />
            <Route path="/decisions" element={<div>Decisions Content</div>} />
            <Route path="/deployment" element={<div>Deployment Content</div>} />
            <Route path="/roadmap" element={<div>Roadmap Content</div>} />
            <Route path="/changelog" element={<div>Changelog Content</div>} />
          </Routes>
        </main>

        <Footer />
      </SearchProvider>
    </BrowserRouter>
  );
}
