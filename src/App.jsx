import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <OtherProjects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
