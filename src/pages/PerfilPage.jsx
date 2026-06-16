import { useUsuario } from '../context/UsuarioContext'

export default function PerfilPage() {
  const { usuario } = useUsuario()

  return (
    <div>
      <div className="welcome">
        <h2>Perfil</h2>
        <p>Seus dados cadastrados no portal.</p>
      </div>

      <div className="card">
        <div className="card__body">
          <span className="card__badge">Aluno</span>
          <h3 className="card__title">{usuario?.nome}</h3>
          <p className="card__description">{usuario?.email}</p>
          {usuario?.cpf && (
            <p className="card__description" style={{ marginTop: 8 }}>
              CPF: {usuario.cpf}
            </p>
          )}
        </div>
      </div>

      <div className="card__group">
        <div className="card">
          <div className="card__body">
            <span className="card__badge">Situação</span>
            <h3 className="card__title">Regular</h3>
            <p className="card__description">Matrícula ativa</p>
          </div>
        </div>
        <div className="card">
          <div className="card__body">
            <span className="card__badge">Período</span>
            <h3 className="card__title">2025.1</h3>
            <p className="card__description">Semestre em andamento</p>
          </div>
        </div>
        <div className="card">
          <div className="card__body">
            <span className="card__badge">Curso</span>
            <h3 className="card__title">Eng. Software</h3>
            <p className="card__description">SATC</p>
          </div>
        </div>
      </div>
    </div>
  )
}
