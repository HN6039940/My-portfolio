import "./App.css";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className=" box-border font-poppins">
        {/* nav */}
        <Navbar />
        {/* hero */}
        <Hero />
        <div className=" bg-gradient-to-tr from-secondary via-tertiary to-primary">
          {/* profile */}
          <Profile />
          {/* aboutMe */}
          <AboutMe />
          {/* skills */}
          <Skills />
          {/* projects */}
          <Projects />
        </div>
      </main>
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
