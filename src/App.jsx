import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact"

import ScrollToTop from "./components/ScrollToTop";

import ComplianceSection from "./pages/Compliance";
import ClientsUI from "./pages/Clients";
import ConsultationPage from "./pages/consultation";


function App() {
  return (
    <>
      <Header />
       <ScrollToTop />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path ="/compliance" element={<ComplianceSection/>}></Route>

        <Route path="/clients" element={<ClientsUI/>}/>
        <Route path="/consultation" element={<ConsultationPage/>}/>

      </Routes>

      <Footer />
    </>
  );
}

export default App;
