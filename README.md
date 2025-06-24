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

Com base nos alunos cadastrados, o sistema deve prever a nota mínima necessária para aprovação, utilizando a nota 1 como entrada.

---

### 📊 Desafio

- Criar uma **função matemática** que relacione `nota1` com `nota2`
- Mostrar no `index.html`, ao digitar a primeira nota:
  > "Para ser aprovado, a nota mínima na próxima prova deverá ser X"

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

---

## 📤 Entrega

A resolução deve estar em um **repositório público no GitHub**.  
Basta enviar o **link do repositório** ao CodeLab para verificação.

---

**Boa sorte e boa diversão! 🚀**
