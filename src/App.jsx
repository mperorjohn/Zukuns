import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Docs from "./pages/Docs";
import API from "./pages/API";
import Services from "./pages/Services";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/documentation" element={<Docs />} />
        <Route exact path="/api" element={<API />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
