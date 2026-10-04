import "./App.css";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <header className="header">
          <a href="/" className="header__logo-link" aria-label="Huddle Home">
            <img src={Logo} alt="" className="header__logo" />
          </a>
        </header>
        <main id="main-content" className="main-content">
          <Hero />
          <SocialLinks />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
