import React, { useEffect, useState } from 'react';
import { Utente } from '../types/utente';
import { getUtentesFicticios } from '../services/utenteService';

const DashboardPage: React.FC = () => {
  const [utentes, setUtentes] = useState<Utente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const carregarDados = async () => {
      const dados = await getUtentesFicticios();
      setUtentes(dados);
      setLoading(false);
    };
    carregarDados();
  }, []);

  return (
    <div className="h-100 d-flex flex-column">
      <h1 className="h4 fw-bold mb-4 text-dark">Dashboard de Atividade</h1>
      
      {loading ? (
        <div className="d-flex align-items-center justify-content-center flex-grow-1">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">A carregar...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4 mb-4">
          {/* Cartão de Total */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <h6 className="card-subtitle mb-2 text-muted text-uppercase fw-bold" style={{ fontSize: '12px' }}>Total de Utentes</h6>
                <h2 className="card-title fw-bold text-dark mb-0">{utentes.length}</h2>
              </div>
            </div>
          </div>
          
          {/* Cartão de Urgências */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-danger bg-danger bg-opacity-10 h-100">
              <div className="card-body p-4">
                <h6 className="card-subtitle mb-2 text-danger text-uppercase fw-bold" style={{ fontSize: '12px' }}>Casos Urgentes (0 dias)</h6>
                <h2 className="card-title fw-bold text-danger mb-0">
                  {utentes.filter(u => u.prioridade === 'Urgente 0 dias').length}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;