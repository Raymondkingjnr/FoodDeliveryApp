import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Headlincard from "./components/Headlincard";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headlincard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
