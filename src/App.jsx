import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Service from "./Components/Service";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <About />
      <Service />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
