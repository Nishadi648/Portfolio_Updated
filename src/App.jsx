import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import CaseStudy from './pages/CaseStudy.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects/:slug" element={<CaseStudy />} />
        {/* old page URLs now point to sections of the one-page site */}
        <Route path="about" element={<Navigate to="/#about" replace />} />
        <Route path="projects" element={<Navigate to="/#ba-projects" replace />} />
        <Route path="ba" element={<Navigate to="/#ba-projects" replace />} />
        <Route path="ba/:slug" element={<Navigate to="/#ba-projects" replace />} />
        <Route path="contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
