// import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import GalleryPage from './components/GalleryPage'
import ProjectsPage from './components/ProjectsPage'
import CertificatePage from './components/CertificatePage'
import ContactPage from './components/ContactPage.jsx'
import logo from '../src/img/logo.png'



function App() {
  return (
        <div>
          <Router>
            <div>
              <nav>
                <img src={logo} alt="Logo" />
                <ul className="unOrdered" id="navbarEish">
                  <li>
                    <Link to="/">MAIN</Link>
                  </li>
                  <li>
                    <Link to="/gallery">GALLERY</Link>
                  </li>
                  <li>
                    <Link to="/projects">PROJECTS</Link>
                  </li>
                  <li>
                    <Link to="/certification">CERTIFICATION</Link>
                  </li>
                  <li>
                    <Link to="/contacts">CONTACTS</Link>
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/certification" element={<CertificatePage />} />
                <Route path="/contacts" element={<ContactPage />} />
              </Routes>
            </div>
          </Router>
      </div>
  );
}

export default App;
