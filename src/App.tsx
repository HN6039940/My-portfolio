import "./App.css";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <main className=" font-poppins">
        {/* nav */}
        <Navbar />
        {/* hero */}
        <Hero />
        <div className=" bg-gradient-to-tr from-secondary via-tertiary to-primary">
          {/* profile */}
          <Profile />
          {/* about */}
          {/* projects */}
          <div className=" min-h-dvh ">
            <h1 className=" text-white">Hello World</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
