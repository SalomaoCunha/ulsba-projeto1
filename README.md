# ULSBA – Plataforma de Apoio à Equipa de Cuidados Paliativos

Plataforma web de apoio à equipa de cuidados paliativos da ULSBA, desenvolvida no âmbito do **Projeto Integrado 2026/2027** da Licenciatura em Engenharia Informática do Instituto Politécnico de Beja (IPBeja).

> **Estado:** em desenvolvimento. Todos os dados usados atualmente são **fictícios**.

## Estrutura do repositório

Este repositório reúne todo o projeto (monorepo):

```
.
├── frontend/    # Aplicação web (React + TypeScript + Vite + Bootstrap)
├── backend/     # API e lógica de servidor
├── docs/        # Documentação: requisitos, arquitetura, relatórios
└── README.md    # Este ficheiro
```

| Pasta       | Conteúdo                                   | Documentação                        |
| ----------- | ------------------------------------------ | ----------------------------------- |
| `frontend/` | Interface da aplicação                     | [frontend/README.md](frontend/README.md) |
| `backend/`  | API e base de dados (tecnologia a definir) | [backend/README.md](backend/README.md)   |
| `docs/`     | Documentos do projeto                      | [docs/README.md](docs/README.md)         |

## Como arrancar

Clonar o repositório:

```bash
git clone <URL-DO-REPOSITORIO>
cd <NOME-DO-REPOSITORIO>
```

Depois, arrancar cada parte seguindo o README da respetiva pasta:

- **Frontend:** ver [frontend/README.md](frontend/README.md). Em resumo: `cd frontend`, `npm install`, copiar `.env.example` para `.env` e `npm run dev`.
- **Backend:** ver [backend/README.md](backend/README.md) (ainda por definir).

> **Windows / PowerShell:** se aparecer o erro *"running scripts is disabled on this system"*, usar `npm.cmd` em vez de `npm`, ou executar uma vez `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.

## Fluxo de trabalho

- **Uma branch por tarefa** (ex.: `feat/lista-utentes`, `fix/layout-sidebar`) e *pull request* para o `main`. Não fazer commits diretos no `main`.
- **Mensagens de commit** no formato `tipo: descrição`:
  - `feat:` nova funcionalidade
  - `fix:` correção de erro
  - `chore:` configuração e manutenção
  - `docs:` documentação
- **Antes de começar a trabalhar:** `git pull`.
- **Antes de abrir uma pull request:** garantir que o projeto compila e passa no lint da parte alterada.
- **Evitar conflitos:** combinar quem mexe em quê. Ficheiros partilhados (rotas, configurações) são os mais propensos a conflitos.

## Privacidade e dados de saúde

Este projeto lida com um contexto de saúde. Por isso, toda a equipa deve:

- Usar **apenas dados fictícios** no código, em commits, capturas de ecrã e documentação.
- Nunca versionar ficheiros `.env` ou qualquer credencial, chave ou palavra-passe.
- Nunca colocar dados reais de utentes em dados de exemplo.

## Equipa

- Tiago Sanina
- Miguel Sanina
- Salomão Cunha
- Beatriz Caixeiro

Orientação: Elsa Rodrigues