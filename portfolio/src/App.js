import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import MainPage from "./mainPage";
import ProjectsPage from "./projectsPage";
import InfoPage from "./infoPage";
import ContactPage from "./contactPage";
import ResumePage from "./resumePage";
import ExperiencePage from "./workExperience";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <NavBar />
      <Sidebar />
      <main className="flex-1 app-content pb-12">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projectsPage" element={<ProjectsPage />} />
          <Route path="/infoPage" element={<InfoPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/resumePage" element={<ResumePage />} />
          <Route path="/experiencePage" element={<ExperiencePage />} />
        </Routes>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
