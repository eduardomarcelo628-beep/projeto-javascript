import { renderTarefas } from "./tarefas.js";

import { renderCadastro } from "./cadastro.js";


const app = document.getElementById("app");


function renderInicio() {

    app.innerHTML = `
        <section>
            <h1>Seja bem-vindo!</h1>

            <p>
                Organize as suas tarefas de forma simples!
            </p>
        </section>
    `;
}


function renderSobre() {

    app.innerHTML = `
        <section>
            <h1>Sobre o Projeto</h1>

            <p>
                Uma SPA criada com HTML, CSS e JavaScript.
                Projeto da faculdade sobre Desenvolvimento Front-End para Web.
                Espero que gostem!
            </p>
        </section>
    `;
}


function renderNaoEncontrada() {

    app.innerHTML = `
        <h1>Página não encontrada.</h1>
    `;
}


// Tabela de rotas
const rotas = {

    inicio: renderInicio,

    tarefas: renderTarefas,

    sobre: renderSobre,

    cadastro: renderCadastro
};


// Atualiza o menu
function atualizarMenu(rota) {

    document
        .querySelectorAll("[data-link]")
        .forEach((link) => {

            const ativo =
                link.getAttribute("href") === `#${rota}`;

            link.classList.toggle("ativo", ativo);
        });
}


// Navegação
function navegar() {

    const rota =
        location.hash.slice(1) || "inicio";

    const render = rotas[rota];


    if (render) {

        render();

    } else {

        renderNaoEncontrada();
    }


    atualizarMenu(rota);
}


// Intercepta os cliques do menu
document.addEventListener("click", (evento) => {

    const link =
        evento.target.closest("[data-link]");


    if (!link) {
        return;
    }


    evento.preventDefault();


    history.pushState(
        null,
        "",
        link.getAttribute("href")
    );


    navegar();
});


// Botões voltar/avançar
window.addEventListener(
    "popstate",
    navegar
);


// Renderização inicial
navegar();