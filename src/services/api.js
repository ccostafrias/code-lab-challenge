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

    if (!response.ok) {
      throw new Error("Erro ao cadastrar aluno")
    }

    return await response.json() // retorna o aluno cadastrado
  } catch (error) {
    console.error("Erro ao salvar no JSON Server:", error)
    throw error
  }
}

export async function lerAlunos() {
  try {
    const response = await fetch("http://localhost:3001/alunos");
    if (!response.ok) {
      throw new Error("Erro na resposta do servidor");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Erro ao buscar alunos:", err);
    return []; // retorna array vazio para evitar quebra
  }
}