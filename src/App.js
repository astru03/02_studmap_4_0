import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Impressum from "./pages/Impressum";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dokumentation" element={<Documentation />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
