import React from "react";
import Sidebar from "../components/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="content">
        <h1>Willkommen auf der Startseite!</h1>
        <p>Das ist die Hauptansicht deiner Webseite.</p>
      </div>
    </div>
  );
};

export default Home;
