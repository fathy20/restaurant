/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-djafa-black text-white selection:bg-djafa-yellow selection:text-djafa-black">
      <Navbar />
      <Hero />
      <Menu />
      <Story />
      <Footer />
    </div>
  );
}
