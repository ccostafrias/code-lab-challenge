import { useState } from 'react';
import { cadastrarAluno } from "../services/api";
import ReactModal from 'react-modal';
import '../styles/Home.css'

function Home() {
  const [inputs, setInputs] = useState({
    name: '',
    p1: '',
    p2: ''
  })
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputs.name == '' || inputs.p1 == '' || inputs.p2 == '') {
      console.log("OPA")
      alert('Preencha todos os campos!')
      return
    } if (inputs.p1 <= 0 || inputs.p2 <= 0) {
      alert('Preencha com notas válidas!')
      return
    }

    try {
      await cadastrarAluno({
        name: inputs.name, 
        p1: parseFloat(inputs.p1), 
        p2: parseFloat(inputs.p2)
      })

      alert("Aluno cadastrado com sucesso!");
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
      <ReactModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
      </ReactModal>
      <main className='main-home'>
        <h1>Formulário de notas</h1>
        <form onSubmit={handleSubmit}>
          <div className='forms-wrap'>
            <label for="name">Nome do aluno:</label>
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
            <label for="p1">Nota p1:</label>
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
            <label for="p2">Nota p2:</label>
            <input
              type="number"
              name="p2"
              id="p2"
              placeholder='Nota p2'
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
