import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import CasesUse from "./views/CasesUse";
import Price from "./views/Price";
import Blog from "./views/Blog";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/cases" element={<CasesUse />} />
      <Route path="/pricing" element={<Price />} />
      <Route path="/blog" element={<Blog/>} />

    </Routes>
  );
}

export default App;
