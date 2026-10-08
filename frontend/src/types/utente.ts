// Corrigir posterior com os nomes corretos
export type Prioridade = 'Urgente 0 dias' | 'Prioritário' | 'Normal';

export interface Utente {
  id: number;
  nome: string;
  prioridade: Prioridade;
}