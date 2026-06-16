import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useUsuario } from '../context/UsuarioContext'
import './InternalLayout.css'

function navCls({ isActive }) {
  return isActive ? 'menu__item menu__item--active' : 'menu__item'
}

export default function InternalLayout() {
  const { usuario, fazerLogout } = useUsuario()
  const navigate = useNavigate()

  function handleLogout() {
    fazerLogout()
    navigate('/login')
  }

  return (
    <div className="dashboard-page">
      <header className="menu">
        <div className="menu__body">
          <h1 className="menu__title">
            Academia
            <span>Portal do aluno</span>
          </h1>

          <nav className="menu__links">
            <NavLink to="/app/dashboard"   className={navCls}>Painel</NavLink>
            <NavLink to="/app/disciplinas" className={navCls}>Disciplinas</NavLink>
            <NavLink to="/app/tutor-ia"    className={navCls}>Tutor IA</NavLink>
            <NavLink to="/app/perfil"      className={navCls}>Perfil</NavLink>
            <button className="menu__logout" onClick={handleLogout}>
              Sair
            </button>
          </nav>
        </div>
      </header>

      <div className="dashboard__container">
        <Outlet />
      </div>
    </div>
  )
}
