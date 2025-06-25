export async function cadastrarAluno({ name, p1, p2 }) {
  try {
    const response = await fetch("http://localhost:3001/alunos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        p1,
        p2,
      }),
    })

    if (!response.ok) { // caso dê um erro de protocolo
      throw new Error("Erro ao cadastrar aluno")
    }

    return await response.json() // retorna o aluno cadastrado
  } catch (error) {
    console.error("Erro ao salvar no JSON Server:", error)
    throw error
  }
}

export async function deletarTodosAlunos() {
  try {
    // obter todos os alunos cadastrados
    const response = await fetch("http://localhost:3001/alunos")
    if (!response.ok) {
      throw new Error("Erro ao buscar os alunos para deletar.")
    }
    const alunos = await response.json()

    // enviar um requisição de DELETE para cada um dos alunos
    // Usamos Promise.all para aguardar que todas as requisições de exclusão terminem
    await Promise.all(
      alunos.map(aluno => {
        return fetch(`http://localhost:3001/alunos/${aluno.id}`, {
          method: "DELETE",
        }).then(response => {
          if (!response.ok) {
            // Lança um erro se a exclusão de um aluno específico falhar
            throw new Error(`Erro ao deletar o aluno com ID: ${aluno.id}`)
          }
        })
      })
    )

    // Opcionalmente, você pode retornar algo para indicar o sucesso
    return { success: true, message: "Todos os alunos deletados." }

  } catch (error) {
    console.error("Ocorreu um erro ao tentar deletar todos os alunos:", error)
    throw error // Propaga o erro para quem chamou a função
  }
}

export async function lerAlunos() {
  try {
    const response = await fetch("http://localhost:3001/alunos")
    if (!response.ok) { // caso dê um erro de protocolo
      throw new Error("Erro na resposta do servidor")
    }

    return await response.json() // retornar um array com os alunos
  } catch (err) { // caso dê um erro por falha do servidor (server desligado, por ex.)
    console.error("Erro ao buscar alunos:", err)
    return [] // retorna array vazio para evitar quebra
  }
}