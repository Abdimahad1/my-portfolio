import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;