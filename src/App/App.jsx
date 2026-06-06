import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home/Home.jsx";
import Standards from "../pages/Standards/Standards.jsx";
import Templates from "../pages/Templates/Templates.jsx";
import Examples from "../pages/Examples/Examples.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/examples" element={<Examples />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
