import { createContext, useContext, useState } from 'react'

const UsuarioContext = createContext(null)

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  function fazerLogin(dados) {
    setUsuario(dados)
  }

  function fazerLogout() {
    setUsuario(null)
  }

  return (
    <UsuarioContext.Provider value={{ usuario, fazerLogin, fazerLogout }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export function useUsuario() {
  return useContext(UsuarioContext)
}
