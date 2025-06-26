import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlunos } from '../hooks/useAlunos';
import { cadastrarAluno } from "../services/api";
import { estimarNota } from '../services/estimarNota';
import { titleize } from './../services/titleize';

import '../styles/Home.css'
import DialogAction from '../components/DialogAction';

function Home() {
  const navigate = useNavigate() // usado para navegar entre as rotas
  const {alunos, loading} = useAlunos() // hook personlizado que obtem os alunos
  const [possivelP2, setPossivelP2] = useState('Nota p2')
  const [dialogOpen, setDialogOpen] = useState(false);

  // inicia um objeto vazio com os inputs
  const [inputs, setInputs] = useState({
    name: '',
    p1: '',
    p2: ''
  })
  const [errors, setErrors] = useState({})

  // sempre que o input da nota p1 for modificado, verifica se há alunos cadastrados e, se tiver mais que cinco, faz a previsão para a nota da p2
  useEffect(() => {
    if (alunos?.length < 5) return 
    if (inputs.p1 == '') {
      setPossivelP2('Nota p2')
      return 
    }
    const estimativaP2 = estimarNota({alunos, nota: inputs.p1})
    setPossivelP2(`Nota estimada: ${estimativaP2.toFixed(1)}`)
  }, [inputs.p1])

  // faz a mudança dos inputs de maneira dinâmica
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => (
      {
        ...values, 
        [name]: value
      }
    ))
  }

  // lida com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault()

    const newErrors = {};

    // verificações
    if (!inputs.name.trim()) {
      newErrors.name = "Preencha o nome do aluno.";
    } else if (!/^[a-zA-Z\s]+$/.test(inputs.name)) {
      newErrors.name = "O nome deve conter apenas letras.";
    }

    if (inputs.p1 === "" || isNaN(inputs.p1)) {
      newErrors.p1 = "Nota 1 deve ser um número.";
    } else if (inputs.p1 < 0 || inputs.p1 > 10) {
      newErrors.p1 = "Nota 1 deve estar entre 0 e 10.";
    }

    if (inputs.p2 === "" || isNaN(inputs.p2)) {
      newErrors.p2 = "Nota 2 deve ser um número.";
    } else if (inputs.p2 < 0 || inputs.p2 > 10) {
      newErrors.p2 = "Nota 2 deve estar entre 0 e 10.";
    }

    // se tiver erros, mostra e não envia
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // se não tiver erro, envia
    setErrors({})

    // se passar pela verificação, fará o POST dos dados através da função cadastrarAluno()
    try {
      await cadastrarAluno({
        name: titleize(inputs.name), 
        p1: parseFloat(inputs.p1), 
        p2: parseFloat(inputs.p2)
      })

      // abre o dialog com a confirmação do cadastro
      setDialogOpen(true)

      // limpará o formulário após o preenchimento
      setInputs({
        name: '',
        p1: '',
        p2: ''
      })

    } catch (err) {
      alert("Erro ao cadastrar aluno");
    }
  }

  return (
    <>
      <DialogAction
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        title={"Aluno cadastrado!"}
        text={"Deseja continuar para o painel de notas?"}
        // actions é um array de objetos com os botões que terão no dialog
        actions={[
          {
            onClick: () => setDialogOpen(false),
            label: 'Voltar',
            autoFocus: true,
          }, {
            onClick: () => navigate("/notas"),
            label: 'Avançar'
          }
        ]}
      />
      <main className='main-home'>
        <h1>Formulário de notas</h1>
        <form onSubmit={handleSubmit}>
          <div className='forms-wrap'>
            <label htmlFor="name">Nome do aluno:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder='Nome'
            />
            {/* acrescenta uma pequena mensagem de erro abaixo do input  */}
            {errors.name && <p className="error-text">{errors.name}</p>} 
          </div>
          <div className="forms-wrap">
            <label htmlFor="p1">Nota p1:</label>
            <input
              type="number"
              name="p1"
              id="p1"
              value={inputs.p1}
              onChange={handleChange}
              placeholder='Nota p1'
            />
            {errors.p1 && <p className="error-text">{errors.p1}</p>}
          </div>
          <div className="forms-wrap">
            <label htmlFor="p2">Nota p2:</label>
            <input
              type="number"
              name="p2"
              id="p2"
              placeholder={possivelP2}
              value={inputs.p2}
              onChange={handleChange}
            />
            {errors.p2 && <p className="error-text">{errors.p2}</p>}
          </div>
          <input type="submit" className='forms-submit'/>
        </form>
      </main>
    </>
  )
}

export default Home
