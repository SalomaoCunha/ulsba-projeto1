import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="d-flex vh-100 bg-light">
      
      {/* Menu Lateral (Sidebar) */}
      <aside className="bg-dark text-white d-flex flex-column" style={{ width: '260px' }}>
        <div className="p-3 d-flex align-items-center border-bottom border-secondary gap-2 mb-2">
          <div className="text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: '32px', height: '32px' }}>
            <i className="bi bi-heart-pulse fs-3"></i>
          </div>
          <h1 className="h6 mb-0 lh-sm ms-2">Cuidados<br/>Domiciliários</h1>
        </div>
        
        <nav className="flex-grow-1 px-3 py-2 d-flex flex-column gap-2 overflow-auto">
          <Link to="/" className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-house-door fs-5"></i> Dashboard
          </Link>
          <Link to="/utentes" className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-person fs-5"></i> Utentes
          </Link>
          <Link to="/" className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-map fs-5"></i> Mapa
          </Link>
          <Link to="/agenda" className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-calendar3 fs-5"></i> Agenda
          </Link>
          <Link to="/visitas" className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-clipboard-check fs-5"></i> Visitas
          </Link>
          <Link to="/rotas" className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-signpost-split fs-5"></i> Rotas
          </Link>
          <Link to="/relatorios" className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-bar-chart fs-5"></i> Relatórios
          </Link>
          <Link to="/mensagens" className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-envelope fs-5"></i> Mensagens
          </Link>
          <Link to="/configuracoes" className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-gear fs-5"></i> Configurações
          </Link>
        </nav>

        {/* Botão Sair no fundo */}
        <div className="p-3 mt-auto border-top border-secondary">
          <button className="btn btn-dark text-start w-100 d-flex align-items-center gap-3">
            <i className="bi bi-box-arrow-left fs-5"></i> Sair
          </button>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-grow-1 d-flex flex-column overflow-hidden">
        <header className="bg-white border-bottom d-flex align-items-center justify-content-between px-4 shadow-sm" style={{ height: '64px' }}>
          <h2 className="h6 mb-0 text-dark fw-bold">Plataforma de Gestão de Cuidados Domiciliários</h2>
          
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <i className="bi bi-bell fs-5 text-secondary"></i>
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">Novos alertas</span>
              </span>
            </div>
            
            <div className="d-flex align-items-center gap-2 ms-3 border-start ps-3">
              <div className="text-end">
                <p className="mb-0 fw-bold small text-dark">Enf. Ana Silva</p>
                <p className="mb-0 text-muted" style={{ fontSize: '11px' }}>Coordenadora</p>
              </div>
              <div className="bg-secondary rounded-circle" style={{ width: '36px', height: '36px', overflow: 'hidden' }}>
                <i className="bi bi-person-fill text-white d-flex justify-content-center align-items-center h-100 fs-4"></i>
              </div>
            </div>
          </div>
        </header>

        {/* Injeção de Páginas */}
        <div className="flex-grow-1 overflow-auto p-4">
          <Outlet />
        </div>
      </main>
      
    </div>
  );
};

export default MainLayout;