import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState(() => localStorage.getItem('tema') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  function alternarTema() {
    setTema(atual => (atual === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ tema, setTema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTema() {
  return useContext(ThemeContext)
}
