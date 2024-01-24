import AboutComponent from "@/components/about";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import { auth } from "@clerk/nextjs";
import Image from "next/image";

export default function LandingPage() {
  const session = auth();
  // console.log(session)
  return (
    <div>
      <div className="px-3 lg:px-0">
        <Navbar />
        <Home />
        <AboutComponent />
        <FAQ />
        <Contact />
      </div>
      
    </div>
  );
}
