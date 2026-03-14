import Hero from "../components/Hero";
import Services from "../components/Services";
import Clients from "../components/Clients";
import IndiaMap from "../components/IndiaMap";
import IntroVideo from "../components/IntroVideo"
export default function Home() {
  return (
    <>
    
      <IntroVideo />
      <Hero />
      <Services />

      <Clients />
      <IndiaMap />
    </>
  );
}
