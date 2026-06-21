import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Menu from "./components/Menu";
import Branches from "./components/Branches";
import Contact from "./components/Contact";
import FeedbackModal from "./components/FeedbackModal";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Branches />
      <Contact />
    </>
  );
}

export default function App() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <div className="min-h-screen bg-djafa-black text-white selection:bg-djafa-yellow selection:text-djafa-black">
        <Navbar onFeedbackOpen={() => setFeedbackOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<div className="pt-24 pb-12 min-h-screen"><Menu /></div>} />
        </Routes>
        <Footer onFeedbackOpen={() => setFeedbackOpen(true)} />
        <FloatingButtons />
        <FeedbackModal isOpen={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
      </div>
    </Router>
  );
}
