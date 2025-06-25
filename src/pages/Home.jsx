import { useState, useEffect } from 'react';
import { useAlunos } from '../hooks/useAlunos';
import { cadastrarAluno } from "../services/api";
import { estimarNota } from '../services/estimarNota';
import { titleize } from './../services/titleize';

import '../styles/Home.css'

function Home() {
  const { alunos, loading } = useAlunos()
  const [ possivelP2, setPossivelP2 ] = useState('Nota p2')

  const [inputs, setInputs] = useState({
    name: '',
    p1: '',
    p2: ''
  })

  useEffect(() => {
    if (alunos?.length < 5) return 
    if (inputs.p1 == '') {
      setPossivelP2('Nota p2')
      return 
    }
    const estimativaP2 = estimarNota({alunos, nota: inputs.p1})
    setPossivelP2(`Possível nota: ${estimativaP2.toFixed(1)}`)
  }, [inputs.p1])

  const [modalOpen, setModalOpen] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // faz uma verificação rápida se os campos estão vazios ou se os valores das notas são válidos
    if (inputs.name == '' || inputs.p1 == '' || inputs.p2 == '') {
      alert('Preencha todos os campos!')
      return
    } if (inputs.p1 < 0 || inputs.p2 < 0 || inputs.p1 > 10 || inputs.p2 > 10) {
      alert('Preencha com notas válidas!')
      return
    }

    // se passar pela verificação, fará o POST dos dados através da função cadastrarAluno()
    try {
      await cadastrarAluno({
        name: titleize(inputs.name), 
        p1: parseFloat(inputs.p1), 
        p2: parseFloat(inputs.p2)
      })

      alert("Aluno cadastrado com sucesso!")
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
          </div>
          <input type="submit" className='forms-submit'/>
        </form>
      </main>
    </>
  )
}

export default Home
