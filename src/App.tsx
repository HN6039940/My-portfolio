import "./App.css";

import Navbar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";

import { moveBg } from "./assets/style/Main.style";

function App() {
  return (
    <>
      <main className=" box-border font-poppins">
        {/* nav */}
        <Navbar />
        {/* hero */}
        <Hero />
        <div
          css={moveBg}
          className=" bg-gradient-to-tr from-secondary via-tertiary to-primary"
        >
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
