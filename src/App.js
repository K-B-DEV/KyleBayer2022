import GlobalStyles from "./components/GlobalStyles";
//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyles />
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
