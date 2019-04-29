import React from "react";

import Board from "./components/board";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Board />
      <Footer />
    </div>
  );
}

export default App;