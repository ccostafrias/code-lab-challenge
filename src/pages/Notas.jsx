import { useState } from "react"
import { useAlunos } from "../hooks/useAlunos"
import { deletarTodosAlunos } from "../services/api";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "../styles/Notas.css"

import DialogAction from "../components/DialogAction";

function Notas() {
  const [ dialogDeleteAllOpen, setDialogDeleteAllOpen ] = useState()
  const [ dialogDeleteOneOpen, setDialogDeleteOneOpen ] = useState()
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
        <td className={`table-center ${foiAprovado == "Aprovado" ? 'td-aprovado' : 'td-reprovado'}`}>
          <span>{foiAprovado}</span>
        </td>
      </tr>
    )
  })

  const handleDelete = () => {
    deletarTodosAlunos()
    setAlunos([])
  }

  return (
    <>
      <DialogAction
        open={dialogDeleteAllOpen}
        handleClose={() => setDialogDeleteAllOpen(false)}
        title={"Apagar todos"}
        text={"Certeza que deseja deletar TODOS os alunos cadastrados?"}
        actions={[
          {
            onClick: () => setDialogDeleteAllOpen(false),
            label: 'Voltar',
            autoFocus: true,
          }, {
            onClick: () => {
              handleDelete()
              setDialogDeleteAllOpen(false)
            },
            label: 'Confirmar'
          }
        ]}
      />
      <main className="main-notas">
        <h1>Tabela de alunos</h1>
        { 
          loading ? (<span>Loading</span>) // a configurar ainda
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
                  <button
                    type="button"
                    onClick={() => setDialogDeleteAllOpen(true)}
                    className="icon-button"
                    aria-label="deletar todos os alunos" // para acessibiliade
                  >
                    <MdDelete className="table--trash-icon"/>
                  </button>
                  {/* <button
                    type="button"
                    onClick={() => setDialogDeleteAllOpen(true)}
                    className="icon-button"
                    aria-label="editar os alunos" // para acessibilidade
                  >
                    <FaEdit className="table--edit-icon"/>
                  </button> */}
              </div>
            </>
          )
        }
      </main>
    </>
   )
}

export default Notas
