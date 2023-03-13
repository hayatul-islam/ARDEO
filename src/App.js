import React from "react";
import AllUsers from "./components/AllUsers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <AllUsers />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
