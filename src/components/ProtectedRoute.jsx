import { Navigate } from 'react-router-dom'
import { useUsuario } from '../context/UsuarioContext'

export default function ProtectedRoute({ children }) {
  const { usuario } = useUsuario()
  if (!usuario) return <Navigate to="/login" replace />
  return children
}
