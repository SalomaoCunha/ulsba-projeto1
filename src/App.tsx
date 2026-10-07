import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Páginas Temporárias (mais tarde vais criar ficheiros reais na pasta /pages)
const DashboardPage = () => <div><h1 className="text-2xl font-bold">Dashboard</h1><p>Resumo da atividade...</p></div>;
const UtentesPage = () => <div><h1 className="text-2xl font-bold">Utentes</h1><p>Lista de utentes...</p></div>;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/utentes" element={<UtentesPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;