import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Standards from "./pages/Standards";
import Templates from "./pages/Templates";
import Examples from "./pages/Examples";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standards" element={<Standards />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
