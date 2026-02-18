import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="page-shell">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;