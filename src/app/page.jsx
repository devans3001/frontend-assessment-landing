import Benefits from "@/components/benefits";
import Feature from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";
import QuickAccess from "@/components/quick-access";
import Trade from "@/components/trade";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar/>
      <Hero/>
      <QuickAccess/>
      <HowItWorks/>
      <Feature/>
      <Benefits/>
      <Trade/>
      <Footer/>
    </div>
  );
}
