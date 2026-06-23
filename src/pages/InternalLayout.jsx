import { NavLink, Outlet } from 'react-router-dom'
import './InternalLayout.css'

function IconePainel() {
  return (
    <svg viewBox="0 0 20 20" width="17" height="17" fill="currentColor" aria-hidden="true">
      <rect x="2" y="2" width="7" height="7" rx="1.5" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" />
    </svg>
  )
}

function IconeDisciplinas() {
  return (
    <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 3h9a2 2 0 0 1 2 2v12l-3-2-3 2-3-2-2 1V4a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
    </svg>
  )
}

function IconeTutor() {
  return (
    <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="6" width="14" height="10" rx="2.5" />
      <path d="M10 3v3M7 11h.01M13 11h.01" strokeLinecap="round" />
    </svg>
  )
}

function IconePerfil() {
  return (
    <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="10" cy="6.5" r="3.2" />
      <path d="M4 17c0-3 2.7-5 6-5s6 2 6 5" strokeLinecap="round" />
    </svg>
  )
}

const ITENS = [
  { to: '/app/dashboard', label: 'Painel', Icone: IconePainel },
  { to: '/app/disciplinas', label: 'Disciplinas', Icone: IconeDisciplinas },
  { to: '/app/tutor-ia', label: 'Tutor IA', Icone: IconeTutor },
  { to: '/app/perfil', label: 'Perfil', Icone: IconePerfil },
]

function classeLink({ isActive }) {
  return isActive ? 'menu__item menu__item--active' : 'menu__item'
}

export default function InternalLayout() {
  return (
    <div className="app-shell">
      <header className="menu">
        <div className="menu__body">
          <div className="menu__brand">
            <h1 className="menu__title">Academia</h1>
            <span className="menu__subtitle">Portal do Aluno</span>
          </div>

          <nav className="menu__links">
            {ITENS.map(({ to, label, Icone }) => (
              <NavLink key={to} to={to} className={classeLink}>
                <Icone />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}
