import { Routes, Route } from 'react-router-dom';
import MainPage from './mainPage';
import ProjectsPage from './projectsPage';
import InfoPage from './infoPage';
import ContactPage from './contactPage';
import ResumePage from './resumePage';

// <Route path="/projectsPage" element={<Projects />} />

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projectsPage" element={<ProjectsPage />} />
      <Route path="/infoPage" element={<InfoPage />} />
      <Route path="/contactPage" element={<ContactPage />} />
      <Route path="/resumePage" element={<ResumePage />} />
    </Routes>
  );
}

export default App;