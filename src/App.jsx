import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RecuperarSenhaPage from './pages/RecuperarSenhaPage'
import NovaSenhaPage from './pages/NovaSenhaPage'
import CadastroPage from './pages/CadastroPage'
import CadastroDadosPage from './pages/CadastroDadosPage'
import InternalLayout from './pages/InternalLayout'
import DashboardPage from './pages/DashboardPage'
import DisciplinasPage from './pages/DisciplinasPage'
import PerfilPage from './pages/PerfilPage'
import TutorIAPage from './pages/TutorIAPage'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recuperar-senha" element={<RecuperarSenhaPage />} />
      <Route path="/nova-senha" element={<NovaSenhaPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/cadastro/dados" element={<CadastroDadosPage />} />

      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <InternalLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/app/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="disciplinas" element={<DisciplinasPage />} />
        <Route path="perfil" element={<PerfilPage />} />
        <Route path="tutor-ia" element={<TutorIAPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
