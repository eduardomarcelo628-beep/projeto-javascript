# To-Do List

Aplicação web de lista de tarefas desenvolvida com HTML, CSS e JavaScript.

## 📋 Descrição

 O projeto consiste em uma aplicação de lista de tarefas que permite ao usuário cadastrar, concluir e excluir tarefas. As informações são armazenadas no navegador por meio do `localStorage`, permitindo a persistência dos dados.

## 🚀 Funcionalidades

- Adicionar novas tarefas;
- Marcar tarefas como concluídas;
- Excluir tarefas;
- Exibir a quantidade de tarefas cadastradas;
- Persistir as tarefas utilizando `localStorage`;
- Cadastro de usuário com validação dos campos.

## 🛠️ Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- DOM API;
- `localStorage`;
- Git;
- GitHub.

## 📁 Estrutura do projeto

```text
projeto-javascript/
├── css/
│   └── styles.css
├── html/
│   └── index.html
├── imagens/
│   └── logo_listadetarefas.png
├── js/
│   ├── app.js
│   ├── cadastro.js
│   ├── storage.js
│   └── tarefas.js
└── README.md
```

## ▶️ Como executar

1. Clone o repositório;

2. Abra a pasta do projeto no Visual Studio Code;

3. Abra o arquivo html/index.html no navegador ou utilize uma extensão como o Live Server;

4. Utilize a aplicação para adicionar, concluir e excluir tarefas.

## 🌿 Estratégia GitFlow

O projeto utiliza uma estrutura baseada no GitFlow:

main: contém a versão estável do projeto;
develop: concentra o desenvolvimento contínuo;
feature/: utilizada para desenvolver novas funcionalidades de forma isolada.

As funcionalidades desenvolvidas nas branches feature/ são integradas à develop por meio de Pull Requests. Após validação e conclusão do desenvolvimento, a develop poderá ser integrada à main para representar uma nova versão estável.

## 📝 Padrão de commits

Foram utilizados commits semânticos para manter um histórico organizado.

Exemplos:

- feat: para novas funcionalidades;
- fix: para correções;
- docs: para alterações na documentação;
- chore: para tarefas de manutenção e configuração.

👨‍💻 Autor

Marcelo Eduardo
Meu [GitHub](https://github.com/eduardomarcelo628-beep)  
Meu [LinkedIn](https://www.linkedin.com/in/marcelo-eduardo-a03978246/)