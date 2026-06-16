import { useEffect, useState } from 'react'
import { useUsuario } from '../context/UsuarioContext'
import './DashboardPage.css'

function saudacao() {
  const h = new Date().getHours()
  if (h < 12) return 'Bom dia'
  if (h < 18) return 'Boa tarde'
  return 'Boa noite'
}

function dataFormatada() {
  return new Date().toLocaleDateString('pt-BR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function DashboardPage() {
  const { usuario } = useUsuario()
  const [hoje, setHoje] = useState('')

  useEffect(() => {
    setHoje(dataFormatada())
  }, [])

  return (
    <div>
      <div className="welcome">
        <h2>{saudacao()}, {usuario?.nome}</h2>
        <p>{hoje}</p>
        <p>
          Bem-vindo de volta a sua sessão de estudos focado.
          Você tem 2 tarefas para essa semana
          e está atualmente adiantado em seu cronograma de leitura.
        </p>
      </div>

      <div className="card">
        <div className="card__body">
          <span className="card__badge">Em progresso</span>
          <h3 className="card__title">Front-end</h3>
          <p className="card__description">
            Aula 2 — Conceitos de desenvolvimento Front-end e Git + GitHub
          </p>
          <div className="card__progress">
            <div style={{ width: '65%' }}>65%</div>
          </div>
        </div>
        <button className="card__button">Retomar estudo</button>
      </div>

      <div className="card">
        <div className="card__body">
          <span className="card__badge">Em progresso</span>
          <h3 className="card__title">UX Design</h3>
          <p className="card__description">Aula 3 — Usabilidade</p>
          <div className="card__progress">
            <div style={{ width: '34%' }}>34%</div>
          </div>
        </div>
        <button className="card__button">Retomar estudo</button>
      </div>

      <div className="card__group">
        <div className="card">
          <div className="card__body">
            <span className="card__badge">Tempo de estudo</span>
            <h3 className="card__title">12h 45m</h3>
            <p className="card__description">Esta semana</p>
          </div>
        </div>

        <div className="card">
          <div className="card__body">
            <span className="card__badge">Tarefas pendentes</span>
            <h3 className="card__title">2</h3>
            <p className="card__description">Próximo vencimento em 2 dias</p>
          </div>
        </div>

        <div className="card">
          <div className="card__body">
            <span className="card__badge">Discussão com a IA</span>
            <h3 className="card__title">8</h3>
            <p className="card__description">Tópicos ativos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
