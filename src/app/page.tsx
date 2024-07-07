import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Home/Header";
import Projects from "@/components/Projects";
import Qualification from "@/components/Qualification/Qualification";
import ScrollUp from "@/components/ScrollUp";
import Services from "@/components/Services";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
}
