import React from "react";
import Navbar from "./components/Navbar";
import Board from "./components/board/board";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
           <Board />
      <Footer />
    </div>
  );
}

export default App;