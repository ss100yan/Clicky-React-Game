import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer />
    </div>
  );
}

export default App;