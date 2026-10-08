import type { Utente } from '@/types/utente';

const utentes: Utente[] = [
  { id: 1, nome: 'Utente A', prioridade: 'Urgente 0 dias' },
  { id: 2, nome: 'Utente B', prioridade: 'Prioritário' },
  { id: 3, nome: 'Utente C', prioridade: 'Normal' },
];

export async function getUtentesFicticios(): Promise<Utente[]> {
  return new Promise((resolve) => setTimeout(() => resolve(utentes), 300));
}