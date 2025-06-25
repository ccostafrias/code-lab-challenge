import { useEffect, useState } from "react";
import { lerAlunos } from "../services/api"; // ajuste conforme sua estrutura

export function useAlunos() {
  const [alunos, setAlunos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregar() {
      const data = await lerAlunos();
      setAlunos(data);
      setLoading(false);
    }

    carregar()
  }, [])

  return { alunos, setAlunos, loading }
}
