import DisciplinaCard from '../components/DisciplinaCard'
import './DisciplinasPage.css'

const DISCIPLINAS = [
  { id: 1, nome: 'Front-end', professor: 'Prof. Marco Silva', status: 'curso', progresso: 75 },
  { id: 2, nome: 'UX Design', professor: 'Dra. Ana Lúcia', status: 'futuro', progresso: 0 },
  { id: 3, nome: 'Banco de Dados', professor: 'Prof. Carlos Lima', status: 'curso', progresso: 80 },
  { id: 4, nome: 'Estrutura de Dados', professor: 'Dra. Marina Alves', status: 'curso', progresso: 50 },
]

export default function DisciplinasPage() {
  return (
    <div className="disc">
      <h1 className="disc__title">Minhas Disciplinas</h1>

      <div className="disc__grid">
        {DISCIPLINAS.map(disciplina => (
          <DisciplinaCard
            key={disciplina.id}
            nome={disciplina.nome}
            professor={disciplina.professor}
            status={disciplina.status}
            progresso={disciplina.progresso}
          />
        ))}
      </div>
    </div>
  )
}
