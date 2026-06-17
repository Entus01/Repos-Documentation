import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../components/Header/Header.jsx";
import SideBar from "../components/sidebar/SideBar.jsx";
import Content from "../components/Content/Content.jsx";
import Footer from "../components/Footer/Footer.jsx";

import logo from "../assets/Repos-Structure.png";

export default function App() {
  return (
    <div className="app">
      <Header logo={logo} title="Repos Documentation" subtitle="A Central Library for Project Documentation" />

      <SideBar />

      <Content />

      <Footer />
    </div>
  );
}
