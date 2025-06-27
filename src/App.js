
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ textAlign: "center", padding: "2rem", fontFamily: "Arial" }}>
      <header>
        <img src="/logo.jpg" alt="IAWorks Logo" style={{ width: 180, borderRadius: "50%" }} />
        <h1 style={{ fontSize: "2rem", margin: "1rem 0" }}>La IA no reemplaza, potencia.</h1>
        <h2 style={{ fontWeight: "lighter", color: "#666" }}>IAWorks</h2>
        <p style={{ marginTop: "2rem", fontSize: "1.1rem" }}>
          Contáctanos: <strong>683 625 889</strong> 🇪🇸
        </p>
      </header>
    </div>
  );
}

export default App;
