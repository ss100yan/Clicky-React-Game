import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
           <Card />
      <Footer />
    </div>
  );
}

export default App;