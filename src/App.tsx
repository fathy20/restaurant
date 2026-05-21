import { useState } from "react";
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

export default function App() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-djafa-black text-white selection:bg-djafa-yellow selection:text-djafa-black">
      <Navbar onFeedbackOpen={() => setFeedbackOpen(true)} />
      <Hero />
      <About />
      <Timeline />
      <Menu />
      <Branches />
      <Contact />
      <Footer onFeedbackOpen={() => setFeedbackOpen(true)} />
      <FloatingButtons />
      <FeedbackModal isOpen={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </div>
  );
}
