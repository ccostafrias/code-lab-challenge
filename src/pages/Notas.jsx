import { useState, useEffect } from "react"
import { lerAlunos } from "../services/api"
import "../styles/Notas.css"

function Notas() {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    async function carregarAlunos() {
      const data = await lerAlunos();
      setAlunos(data)
    }

    carregarAlunos();
  }, [])

  const alunosElementos = alunos?.map((a, i) => {
    const media = (a.p1 + a.p2)/2
    const foiAprovado = media >= 7 ? "Aprovado" : "Reprovado"
    return (
      <tr>
        <td className="table-center">{i}</td>
        <td>{a.name}</td>
        <td className="table-num">{a.p1}</td>
        <td className="table-num">{a.p2}</td>
        <td className="table-num">{media}</td>
        <td className={foiAprovado == "Aprovado" ? 'td-aprovado' : 'td-reprovado'}>{foiAprovado}</td>
      </tr>
    )
  })

  return (
    <>
      <main className="main-notas">
        <h1>Tabela de alunos</h1>
        <div>
          <table>
            <tr>
              <th>nº</th>
              <th>Nome</th>
              <th>Nota P1</th>
              <th>Nota P2</th>
              <th>Média</th>
              <th>Situação</th>
            </tr>
            {alunosElementos}
          </table>
        </div>
      </main>
    </>
   )
}

export default Notas
