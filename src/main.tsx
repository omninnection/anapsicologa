import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'
import Contact from './pages/Contact.tsx'
import AtuacaoClinica from './pages/AtuacaoClinica.tsx'
import MandalaArquetipica from './pages/MandalaArquetipica.tsx'
import JornadaHeroi from './pages/JornadaHeroi.tsx'
import ExploradorArquetipos from './pages/ExploradorArquetipos.tsx'
import DiarioSonhos from './pages/DiarioSonhos.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Main SPA - User Experience */}
          <Route path="/" element={<App />} />
          
          {/* SEO optimized pages - Google indexing */}
          <Route path="/sobre-ana" element={<Home />} />
          <Route path="/servicos-terapia" element={<Services />} />
          <Route path="/contato-agendar" element={<Contact />} />
          <Route path="/atuacao-clinica-junguiana" element={<AtuacaoClinica />} />
          
          {/* Interactive tools - existing pages */}
          <Route path="/mandala-arquetipica" element={<MandalaArquetipica />} />
          <Route path="/jornada-heroi" element={<JornadaHeroi />} />
          <Route path="/explorador-arquetipos" element={<ExploradorArquetipos />} />
          <Route path="/diario-sonhos" element={<DiarioSonhos />} />
          
          {/* Legacy SPA route for backward compatibility */}
          <Route path="/spa" element={<App />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
)