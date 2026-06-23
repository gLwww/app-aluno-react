import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUsuario } from '../context/UsuarioContext'
import { useTema } from '../context/ThemeContext'
import './PerfilPage.css'

const ABAS = ['Dados Pessoais', 'Configurações', 'Segurança']

export default function PerfilPage() {
  const { usuario } = useUsuario()
  const [abaAtiva, setAbaAtiva] = useState('Dados Pessoais')

  const nome = usuario?.nome || 'João Silva'
  const iniciais = nome.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase()

  return (
    <div className="perfil">
      <div className="perfil__header">
        <div className="perfil__avatar">{iniciais}</div>
        <div>
          <h1 className="perfil__nome">{nome}</h1>
          <p className="perfil__meta">
            {usuario?.curso || 'Engenharia de Software'} • {usuario?.ano || '3º Ano'}
          </p>
        </div>
      </div>

      <div className="perfil__tabs">
        {ABAS.map(aba => (
          <button
            key={aba}
            className={`perfil__tab ${abaAtiva === aba ? 'perfil__tab--active' : ''}`}
            onClick={() => setAbaAtiva(aba)}
          >
            {aba}
          </button>
        ))}
      </div>

      {abaAtiva === 'Dados Pessoais' && <DadosPessoais usuario={usuario} />}
      {abaAtiva === 'Configurações' && <Configuracoes />}
      {abaAtiva === 'Segurança' && <Seguranca />}
    </div>
  )
}

function DadosPessoais({ usuario }) {
  const linhas = [
    { rotulo: 'Nome Completo', valor: usuario?.nome || 'João Silva' },
    { rotulo: 'Nome de Preferência', valor: usuario?.preferencia || 'Jonh' },
    { rotulo: 'Endereço de E-mail', valor: usuario?.email || 'joao.silva@satc.edu.br' },
    { rotulo: 'Matrícula / CPF', valor: usuario?.cpf || '***.***.***-89' },
    { rotulo: 'Número de Telefone', valor: usuario?.telefone || 'Não fornecido', vazio: !usuario?.telefone },
  ]

  return (
    <div className="card dados">
      {linhas.map(linha => (
        <div className="dados__linha" key={linha.rotulo}>
          <span className="dados__rotulo">{linha.rotulo}</span>
          <span className={`dados__valor ${linha.vazio ? 'dados__valor--vazio' : ''}`}>
            {linha.valor}
          </span>
        </div>
      ))}
    </div>
  )
}

function Configuracoes() {
  const { tema, alternarTema } = useTema()
  const [notificacoes, setNotificacoes] = useState(true)
  const [resumoEmail, setResumoEmail] = useState(false)

  return (
    <div className="card config">
      <div className="config__linha">
        <div className="config__texto">
          <h4>Aparência</h4>
          <p>Escolha entre o modo claro e o modo escuro.</p>
        </div>
        <div className="tema-switch">
          <button
            className={tema === 'light' ? 'tema-switch__btn tema-switch__btn--ativo' : 'tema-switch__btn'}
            onClick={() => tema !== 'light' && alternarTema()}
          >
            ☀ Claro
          </button>
          <button
            className={tema === 'dark' ? 'tema-switch__btn tema-switch__btn--ativo' : 'tema-switch__btn'}
            onClick={() => tema !== 'dark' && alternarTema()}
          >
            ☾ Escuro
          </button>
        </div>
      </div>

      <div className="config__linha">
        <div className="config__texto">
          <h4>Notificações push</h4>
          <p>Receba alertas sobre tarefas e prazos no navegador.</p>
        </div>
        <Toggle ligado={notificacoes} onChange={() => setNotificacoes(v => !v)} />
      </div>

      <div className="config__linha">
        <div className="config__texto">
          <h4>Resumo por e-mail</h4>
          <p>Receba um resumo semanal das suas atividades.</p>
        </div>
        <Toggle ligado={resumoEmail} onChange={() => setResumoEmail(v => !v)} />
      </div>
    </div>
  )
}

function Seguranca() {
  const { fazerLogout } = useUsuario()
  const navigate = useNavigate()
  const [doisFatores, setDoisFatores] = useState(false)

  function sair() {
    fazerLogout()
    navigate('/login')
  }

  return (
    <div className="card config">
      <div className="config__linha">
        <div className="config__texto">
          <h4>Senha</h4>
          <p>Sua última alteração foi há 3 meses.</p>
        </div>
        <button className="btn btn--outline">Alterar senha</button>
      </div>

      <div className="config__linha">
        <div className="config__texto">
          <h4>Autenticação em dois fatores</h4>
          <p>Adicione uma camada extra de segurança ao entrar.</p>
        </div>
        <Toggle ligado={doisFatores} onChange={() => setDoisFatores(v => !v)} />
      </div>

      <div className="config__linha">
        <div className="config__texto">
          <h4>Sair da conta</h4>
          <p>Encerrar a sessão neste dispositivo.</p>
        </div>
        <button className="btn btn--danger" onClick={sair}>Sair</button>
      </div>
    </div>
  )
}

function Toggle({ ligado, onChange }) {
  return (
    <button
      type="button"
      className={`toggle ${ligado ? 'toggle--on' : ''}`}
      onClick={onChange}
      aria-pressed={ligado}
    >
      <span className="toggle__bola" />
    </button>
  )
}
