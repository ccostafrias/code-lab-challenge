# 🧠 Desafio do CodeLab 2025

Este projeto tem como objetivo desenvolver um sistema simples de cadastro de alunos e avaliação de suas notas, com visualização dinâmica e previsão de desempenho.

---

## 📌 Objetivo 1: Cadastro e Avaliação de Alunos

### 🔧 Requisitos Técnicos

- Linguagens: **HTML, CSS e JavaScript**
- Organização: separar arquivos HTML, CSS e JS
- Armazenamento: simulado com `json-server` ou `localStorage`

---

### 📘 Etapas do Desafio

#### 1. Página de Cadastro de Alunos (`index.html`)

- Formulário com os seguintes campos:
  - Nome do aluno
  - Nota 1 (0 a 10)
  - Nota 2 (0 a 10)
- Botão **"Cadastrar aluno"**
- Funcionalidades:
  - Validação dos campos
  - Armazenamento dos dados no `notas.json`
- Estrutura adicional:
  - Header e footer
  - Botão para mudar o tema (claro/escuro)
  - Link para página de visualização

#### 2. Página de Visualização de Alunos (`alunos.html`)

- Ao carregar:
  - Leitura do arquivo `notas.json`
  - Cálculo da média de cada aluno
  - Exibição dinâmica da lista com:
    - Nome do aluno
    - Média
    - Situação: **Aprovado** (média ≥ 7) ou **Reprovado**
- Funcionalidades adicionais:
  - Botão para **resetar os dados**
  - Botão para **voltar ao cadastro**
  - Header e footer com opção de mudar o tema

---

### 🎨 Requisitos Visuais

- Design simples e responsivo
- Switch de tema claro/escuro (salvar estado no navegador)
- Estilo limpo com boa legibilidade

---

### ⚠️ Regras Importantes

- `notas.json` pode ser simulado com `json-server` ou `localStorage`
- O botão de reset deve **limpar todos os dados**
- O sistema **não deve recarregar a página** ao realizar ações

---

## 🧠 Objetivo 2: Estimativa de Nota

### 🧪 Contexto

Com base nos dados dos alunos cadastrados, crie uma função matemática que
estime a nota final esperada de um novo aluno, dado o seu desempenho parcial.

---

### 📊 Desafio

- Criar uma **função matemática** que relacione `nota1` com `nota2`
- Mostrar no `index.html`, ao digitar a primeira nota:
  > "Nota estimada: X"

---

### 📌 Regras

- A função pode ser uma **regressão linear**
- Só pode ser usada **após o cadastro de pelo menos 5 alunos completos**
- A lógica deve estar **comentada e justificada no código**
- Pode-se usar bibliotecas como **math.js**

---

### 💡 Exemplo de Análise

| Aluno | Nota 1 | Nota 2 |
|-------|--------|--------|
| João  | 6      | 7      |
| Maria | 8      | 9      |
| Ana   | 5      | 6.2    |
| Pedro | 9      | 9.5    |
| Lucas | 4      | 5.5    |

Com base nesses dados, a função estimará a `nota2` esperada para novos alunos.

## 🧪 Projeto Finalizado

### 📥 Como visualizar o projeto localmente

Siga os passos abaixo para clonar, instalar e rodar o projeto:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/ccostafrias/code-lab-challenge
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o frontend (com Vite):**

   ```bash
   npm run dev
   ```

   O frontend estará disponível em: [http://localhost:5173](http://localhost:5173)

4. **Inicie o servidor simulado (json-server):**

   ```bash
   npm run api
   ```

   O backend estará disponível em: [http://localhost:3001/alunos](http://localhost:3001/alunos)

   > Esse servidor usa o arquivo `notas.json` para simular um banco de dados.

---

### 🔁 Scripts disponíveis

- `npm run dev`: inicia o frontend (React + Vite)
- `npm run api`: inicia o servidor fake com `json-server` em `http://localhost:3001`
