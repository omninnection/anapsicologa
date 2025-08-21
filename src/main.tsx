import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import MandalaArquetipica from './pages/MandalaArquetipica.tsx'
import JornadaHeroi from './pages/JornadaHeroi.tsx'
import ExploradorArquetipos from './pages/ExploradorArquetipos.tsx'
import ConstelacaoComplexos from './pages/ConstelacaoComplexos.tsx'
import DiarioSonhos from './pages/DiarioSonhos.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mandala-arquetipica" element={<MandalaArquetipica />} />
        <Route path="/jornada-heroi" element={<JornadaHeroi />} />
        <Route path="/explorador-arquetipos" element={<ExploradorArquetipos />} />
        <Route path="/constelacao-complexos" element={<ConstelacaoComplexos />} />
        <Route path="/diario-sonhos" element={<DiarioSonhos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)