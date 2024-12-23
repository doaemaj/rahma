import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeelingSection from "./components/FeelingSection"; // Emotion selection component
import FeelingDetail from "./components/FeelingDetail"; // Detail page for duas
import Asmaa from "./components/Asmaa";
import Home from "./components/Home";
import Interface1 from "./components/Interface1" 
import CategoryDetail from "./components/Interface2"
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import du composant

const App = () => {
  return (
    <div >
    <Router>
    <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/names-of-allah" element={<Asmaa />} />
        <Route path="/feeling" element={<FeelingSection />} />
        <Route path="/feeling/:feeling" element={<FeelingDetail />} />
        <Route path="/category/:dhikr" element={<CategoryDetail/>}  />
        <Route path="/category" element={<Interface1/>}  />
      </Routes>
    </Router>
    <Footer></Footer>
    </div>
  );
};

export default App;
