import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Securityservices from "./pages/services/Securityservices";
import GestaoVulnerabilidade from "./pages/services/GestaoVulnerabilidade";
import ThreatIntelligence from "./pages/services/ThreatIntelligence";
import CorporativePhishing from "./pages/services/CorporativePhishing";
import Pentest from "./pages/services/Pentest";
import PurpleTeamAssessment from "./pages/services/PurpleTeamAssessment";
import SiemSaas from "./pages/services/SiemSaas";
import LgpdDpo from "./pages/consulting/LgpdDpo";
import CisoAsAService from "./pages/consulting/CisoAsAService";
import CisoAdvisory from "./pages/consulting/CisoAdvisory";
import ComputerForensics from "./pages/consulting/ComputerForensics";
import Academy from "./pages/academy/Academy";
import OurMethodology from "./pages/about/OurMethodology";
import OurTeam from "./pages/about/OurTeam";
import MissionVisionValuesPurposes from "./pages/about/MissionVisionValuesPurposes";
import CodeofEthicsConduct from "./pages/about/CodeofEthicsConduct";
import Contact from "./pages/contact/Contact";
import PoliticasDePrivacidade from "./pages/about/PoliticasDePrivacidade";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services/managed_security_services"
            element={<Securityservices />}
          />
          <Route
            path="/services/vulnerability_management"
            element={<GestaoVulnerabilidade />}
          />
          <Route
            path="/services/threat_intelligence"
            element={<ThreatIntelligence />}
          />
          <Route
            path="/services/corporative_phishing"
            element={<CorporativePhishing />}
          />
          <Route path="/services/intrusion_testing" element={<Pentest />} />
          <Route
            path="/services/purple_team_assessment"
            element={<PurpleTeamAssessment />}
          />
          <Route path="/services/siem_saas" element={<SiemSaas />} />
          <Route path="/consulting/lgpd_dpo" element={<LgpdDpo />} />
          <Route
            path="/consulting/ciso_as_a_service"
            element={<CisoAsAService />}
          />
          <Route path="/consulting/ciso_advisory" element={<CisoAdvisory />} />
          <Route
            path="/consulting/computer_forensics"
            element={<ComputerForensics />}
          />
          <Route path="/academy" element={<Academy />} />
          <Route path="/about/our_methodology" element={<OurMethodology />} />
          <Route path="/about/our_team" element={<OurTeam />} />
          <Route
            path="/about/mission_vision_values_purposes"
            element={<MissionVisionValuesPurposes />}
          />
          <Route
            path="/about/privacy_policies"
            element={<PoliticasDePrivacidade />}
          />
          <Route
            path="/about/code_of_ethics_conduct"
            element={<CodeofEthicsConduct />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
