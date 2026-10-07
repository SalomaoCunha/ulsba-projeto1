import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Menu Lateral */}
      <aside className="w-64 bg-[#0f172a] text-white flex flex-col">
        <div className="p-5 flex items-center gap-3 border-b border-slate-700">
          <div className="w-8 h-8 bg-emerald-500 rounded font-bold flex items-center justify-center">+</div>
          <h1 className="font-semibold leading-tight">Cuidados<br/>Domiciliários</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link to="/" className="block px-4 py-2 rounded hover:bg-slate-800">Dashboard</Link>
          <Link to="/utentes" className="block px-4 py-2 rounded hover:bg-slate-800">Utentes</Link>
        </nav>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">
          <h2 className="font-semibold text-slate-700">Plataforma ULSBA</h2>
        </header>

        {/* Conteúdo Dinâmico das Páginas */}
        <div className="flex-1 overflow-auto p-8">
          <Outlet />
        </div>
      </main>
      
    </div>
  );
};

export default MainLayout;