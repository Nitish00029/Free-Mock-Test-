// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MyCourses from './components/MyCourses';

// Competitive Exams
import BiharDaroga from './components/BiharDaroga';
import Bstet from './components/Bstet';
import GroupD from './components/GroupD';
import SSCGD from './components/SSCGD';
import SSCGDhindi from './components/SSCGDhindi';

// Newly Added Components
// import BiharCgI from './components/BiharCgI';
import BiharCtet from './components/biharctet';
import BiharEXAM from './components/biharEXAM';
import BiharPolice from './components/biharpolice';
import BSEB1012th from './components/BSEB10+12th';
import BSSC from './components/bssc';
import CBSE1012th from './components/cbse10+12th';

// Current Affairs
import Currentaffairs2026 from './components/Currentaffairs2026';
import Dailycurrentaffairs from './components/Dailycurrentaffairs';

// Class 10 Mock Tests
import MathMockTest from './components/10math';
import HindiMockTest from './components/10hindi';
import SanskritMockTest from './components/10sanskrit';
import ScienceMockTest from './components/10science';
import EnglishMockTest from './components/10english';
import SocialScienceMockTest from './components/10socialscience';
import B12Accountancy from "./components/B12accountancy";
import B12Boilogy from "./components/B12boilogy";
import B12Business from "./components/B12business";
import B12Chemistry from "./components/B12chemistry";
import B12Economics from "./components/B12economics";
import B12English from "./components/B12english";
import B12Entepreneurship from "./components/B12entepreneurship";
import B12Geography from "./components/B12geography";
import B12Hindi from "./components/B12hindi";
import B12History from "./components/B12history";
import B12HomeScience from "./components/B12homescience";
import B12Math from "./components/B12math";
import B12Philosophy from "./components/B12philosophy";
import B12Physic from "./components/B12physic";
import B12Political from "./components/B12plotical";
import B12Psychology from "./components/B12psychology";
import B12Sociology from "./components/B12sociology";
import SSCMTS from "./components/sscmts";
import SSCCGL from "./components/ssccgl";
import SSCCHSL from "./components/sscchsl";
import UPSC from "./components/upsc";
import NEET from "./components/neet";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>

            {/* Main Pages */}
            <Route path="/class-12-accountancy" element={<B12Accountancy />} />
<Route path="/class-12-boilogy" element={<B12Boilogy />} />
<Route path="/class-12-business" element={<B12Business />} />
<Route path="/class-12-chemistry" element={<B12Chemistry />} />
<Route path="/class-12-economics" element={<B12Economics />} />
<Route path="/class-12-english" element={<B12English />} />
<Route path="/class-12-entepreneurship" element={<B12Entepreneurship />} />
<Route path="/class-12-geography" element={<B12Geography />} />
<Route path="/class-12-hindi" element={<B12Hindi />} />
<Route path="/class-12-history" element={<B12History />} />
<Route path="/class-12-home-science" element={<B12HomeScience />} />
<Route path="/class-12-math" element={<B12Math />} />
<Route path="/class-12-philosophy" element={<B12Philosophy />} />
<Route path="/class-12-physics" element={<B12Physic />} />
<Route path="/class-12-political-science" element={<B12Political />} />
<Route path="/class-12-psychology" element={<B12Psychology />} />
<Route path="/class-12-sociology" element={<B12Sociology />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/sscmts" element={<SSCMTS />} />
      <Route path="/ssccgl" element={<SSCCGL />} />
      <Route path="/sscchsl" element={<SSCCHSL />} />
      <Route path="/upsc" element={<UPSC />} />
      <Route path="/neet" element={<NEET />} />

            {/* Competitive Exams */}
            <Route path="/bihar-daroga" element={<BiharDaroga />} />
            <Route path="/bstet" element={<Bstet />} />
            <Route path="/group-d" element={<GroupD />} />
            <Route path="/ssc-gd" element={<SSCGD />} />
            <Route path="/ssc-gd-hindi" element={<SSCGDhindi />} />

            {/* Newly Added Routes */}
            {/* <Route path="/bihar-cgl" element={<BiharCgl />} /> */}
            <Route path="/bihar-ctet" element={<BiharCtet />} />
            <Route path="/bihar-exam" element={<BiharEXAM />} />
            <Route path="/bihar-police" element={<BiharPolice />} />
            <Route path="/bseb-10-12" element={<BSEB1012th />} />
            <Route path="/bssc" element={<BSSC />} />
            <Route path="/cbse-10-12" element={<CBSE1012th />} />

            {/* Current Affairs */}
            <Route
              path="/current-affairs-2026"
              element={<Currentaffairs2026 />}
            />
            <Route
              path="/daily-current-affairs"
              element={<Dailycurrentaffairs />}
            />

            {/* Bihar Board Class 10 Mock Tests */}
            <Route path="/class-10-math" element={<MathMockTest />} />
            <Route path="/class-10-hindi" element={<HindiMockTest />} />
            <Route path="/class-10-sanskrit" element={<SanskritMockTest />} />
            <Route path="/class-10-science" element={<ScienceMockTest />} />
            <Route path="/class-10-english" element={<EnglishMockTest />} />
            <Route
              path="/class-10-social-science"
              element={<SocialScienceMockTest />}
            />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
