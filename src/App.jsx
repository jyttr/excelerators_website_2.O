import logo from './logo.svg';
import './App.css';

import Home from './pages/home';

import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useEffect } from 'react';
import Navbar from "./components/navbar";


import AboutUs from './pages/about_us';
import Gallery from './pages/gallery';
import Members from './pages/members';
import Sponsers from './pages/sponsers';
import Projects from './pages/projects';
import Events from './pages/events';

import AOS from "aos";
import "aos/dist/aos.css";

import back_arrow from "./res/icons/back_arrow.png"





function App() {

  useEffect(() => {


    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    })

  }, []);



  return (
    <div className="App">

      <a id="go_to_home" href="/" >
        {/* <img src={back_arrow} alt="image" /> */}
        {/* <h2>BACK</h2> */}
      </a>

       <Navbar />

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Members />} />

          <Route path="/sponsers" element={<Sponsers />} />
          <Route path="/gallery" element={<Gallery />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
