import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ComplianceSection from "./pages/Compliance";
import ClientsUI from "./pages/Clients";
import ConsultationPage from "./pages/consultation";
import TendersPage from "./pages/Tenderspage.jsx";
import Team from "./pages/Team";
import Search from "./pages/Search";
function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/compliance" element={<ComplianceSection />} />
        <Route path="/clients" element={<ClientsUI />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/tenders" element={<TendersPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;