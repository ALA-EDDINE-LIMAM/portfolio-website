import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import './App.css';

// Placeholder component for pages that don't exist yet
const PlaceholderPage = ({ title }: { title: string }) => (
  <div style={{ padding: '150px 5%', textAlign: 'center', minHeight: '60vh' }}>
    <h1 style={{ fontSize: '2.5rem', color: '#1a1a2e', marginBottom: '1rem' }}>{title}</h1>
    <p style={{ color: '#666' }}>This page is coming soon...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<PlaceholderPage title="Skills" />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/services" element={<PlaceholderPage title="Services" />} />
            <Route path="/testimonials" element={<PlaceholderPage title="Testimonials" />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cv" element={<PlaceholderPage title="CV" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;