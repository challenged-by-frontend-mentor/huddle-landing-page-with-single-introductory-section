import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <div className="page-content">
        <img src={Logo} alt="Huddle logo" className="page-content__logo" />
        <main className="main-content">
          <Hero />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
