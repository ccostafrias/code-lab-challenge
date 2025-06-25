import { useState, useEffect } from "react"
import { useAlunos } from "../hooks/useAlunos"
import { deletarTodosAlunos } from "../services/api";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "../styles/Notas.css"

function Notas() {
  const { alunos, setAlunos, loading } = useAlunos()

  // percorre o array de alunos para gerar componentes para a tabela
  const alunosElementos = alunos?.map((a, i) => {
    const media = (a.p1 + a.p2)/2
    const foiAprovado = media >= 7 ? "Aprovado" : "Reprovado"
    return (
      <tr key={a.id}>
        <td className="table-center">{i+1}</td>
        <td>{a.name}</td>
        <td className="table-num">{a.p1.toFixed(1)}</td>
        <td className="table-num">{a.p2.toFixed(1)}</td>
        <td className="table-num">{media.toFixed(1)}</td>
        <td className={foiAprovado == "Aprovado" ? 'td-aprovado' : 'td-reprovado'}>{foiAprovado}</td>
      </tr>
    )
  })

  const handleDelete = () => {
    deletarTodosAlunos()
    setAlunos([])
  }

  return (
    <>
      <main className="main-notas">
        <h1>Tabela de alunos</h1>
        { 
          loading ? (<span>Loading</span>)
          : alunos.length <= 0 ? (<h2 className="table--no-students">Sem alunos cadastrados :/</h2>)
          : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>nº</th>
                    <th>Nome</th>
                    <th>Nota P1</th>
                    <th>Nota P2</th>
                    <th>Média</th>
                    <th>Situação</th>
                  </tr>
                </thead>
                <tbody>
                  {alunosElementos}
                </tbody>
              </table>
              <div className="table-below">
                <MdDelete onClick={handleDelete} className="table--trash-icon"/>
                <FaEdit className="table--edit-icon"/>
              </div>
            </>
          )
        }
      </main>
    </>
   )
}

export default Notas
