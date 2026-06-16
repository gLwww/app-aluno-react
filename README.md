# App Aluno — React

Portabilidade do App Aluno de HTML/CSS/JS puro para React + Vite.
Projeto final (N3) — Disciplina: Front-end — Centro Universitário SATC.

## Tecnologias

- React 18
- Vite
- React Router DOM v6
- Context API

## Instalação e execução

```bash
# 1. Instalar dependências
npm install

# 2. Instalar o React Router (já incluso no package.json)
npm install react-router-dom

# 3. Rodar em modo de desenvolvimento
npm run dev
```

Acesse em: http://localhost:5173

## Estrutura de pastas

```
src/
├── components/   # InputField, Botao, Card, Sidebar, DisciplinaCard
├── pages/        # LoginPage, CadastroPage, DashboardPage...
├── context/      # UsuarioContext.jsx
├── services/     # apiService.js
├── App.jsx
├── main.jsx
└── index.css
```

## Fluxo de uso

1. Acesse `/login` → entre com qualquer e-mail + senha (mín. 6 chars)
2. Ou acesse `/cadastro` → cadastro em 2 etapas
3. Após login, o dashboard é acessado automaticamente
4. Use a sidebar para navegar entre as telas
5. Para sair, clique em "Sair" no rodapé da sidebar
