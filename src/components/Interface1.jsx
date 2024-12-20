import React from "react";
import Nav from "./Navbar";
import Slider from "./Slider";
import SearchBar from "./SearchBar";
import Categories from "./DhikrDua";
import DidYouKnow from "./DidYouKnow";
import Footer from "./Footer";
const Interface1 = () => {
  return (
  <div style={{ width: "100%", }}>
      <Nav />
      <Slider />
      <SearchBar />
      <Categories />
      <DidYouKnow />

  </div>


  );
};

export default Interface1;