import { useEffect, useState } from 'react'
import { buscarTopicosTutor } from '../services/apiService'
import './TutorIAPage.css'

export default function TutorIAPage() {
  const [topicos, setTopicos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  async function carregar() {
    setCarregando(true)
    setErro(null)
    try {
      const dados = await buscarTopicosTutor()
      setTopicos(dados)
    } catch (e) {
      setErro(e.message)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    carregar()
  }, [])

  return (
    <div>
      <div className="welcome">
        <h2>Tutor IA</h2>
        <p>Tópicos que a IA sugere para você revisar hoje.</p>
      </div>

      {carregando && (
        <div className="tutor-status">
          <span className="tutor-spinner" />
          Carregando respostas do tutor...
        </div>
      )}

      {erro && (
        <div className="tutor-erro">
          <p>Não foi possível carregar os tópicos: {erro}</p>
          <button className="card__button" onClick={carregar}>
            Tentar novamente
          </button>
        </div>
      )}

      {!carregando && !erro && topicos.map(topico => (
        <div className="card" key={topico.id}>
          <div className="card__body">
            <span className="card__badge">Tópico {topico.id}</span>
            <h3 className="card__title">{topico.title}</h3>
            <p className="card__description">{topico.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
