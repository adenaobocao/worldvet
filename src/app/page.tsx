import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import DrMatheus from "@/components/site/DrMatheus";
import Surgeries from "@/components/site/Surgeries";
import Exams from "@/components/site/Exams";
import Urgency from "@/components/site/Urgency";
import Services from "@/components/site/Services";
import Differentials from "@/components/site/Differentials";
import TutorAccess from "@/components/site/TutorAccess";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import PetChatbot from "@/components/site/PetChatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DrMatheus />
        <Surgeries />
        <Exams />
        <Urgency />
        <Services />
        <Differentials />
        <TutorAccess />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <PetChatbot />
    </>
  );
}
