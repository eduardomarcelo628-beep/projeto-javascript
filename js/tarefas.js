import { carregarTarefas, salvarTarefas } from "./storage.js";

const tarefas = carregarTarefas();


function criarItemTarefa(tarefa) {
    const modelo = document.getElementById("tpl-tarefa");

    const item = modelo.content.firstElementChild.cloneNode(true);

    item.dataset.id = tarefa.id;

    item.classList.toggle("concluida", tarefa.concluida);

    item.querySelector(".tarefa-check").checked = tarefa.concluida;

    item.querySelector(".tarefa-titulo").textContent = tarefa.titulo;

    return item;
}


function renderizarLista() {
    const ul = document.getElementById("lista-tarefas");

    ul.replaceChildren();

    const fragmento = document.createDocumentFragment();

    tarefas.forEach((tarefa) => {
        fragmento.appendChild(criarItemTarefa(tarefa));
    });

    ul.appendChild(fragmento);
}


function configurarEventos() {

    // Marcar tarefa como concluída
    document.querySelectorAll(".tarefa-check").forEach((checkbox) => {

        checkbox.addEventListener("change", () => {

            const item = checkbox.closest(".tarefa");

            const id = Number(item.dataset.id);

            const tarefa = tarefas.find(
                (tarefa) => tarefa.id === id
            );

            tarefa.concluida = checkbox.checked;

            item.classList.toggle(
                "concluida",
                tarefa.concluida
            );

            salvarTarefas(tarefas);
        });

    });


    // Excluir tarefa
    document.querySelectorAll(".tarefa-excluir").forEach((botao) => {

        botao.addEventListener("click", () => {

            const item = botao.closest(".tarefa");

            const id = Number(item.dataset.id);

            const indice = tarefas.findIndex(
                (tarefa) => tarefa.id === id
            );

            tarefas.splice(indice, 1);

            salvarTarefas(tarefas);

            renderizarLista();

            configurarEventos();
        });

    });
}


export function renderTarefas() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section>
            <h1>Minhas tarefas</h1>

            <form id="form-tarefa">

                <input
                    type="text"
                    id="nova-tarefa"
                    placeholder="Digite uma nova tarefa"
                >

                <button type="submit">
                    Adicionar
                </button>

            </form>

            <ul id="lista-tarefas"></ul>

        </section>
    `;


    renderizarLista();

    configurarEventos();


    // Adicionar nova tarefa
    const formulario = document.getElementById("form-tarefa");

    const input = document.getElementById("nova-tarefa");


    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const titulo = input.value.trim();

        if (titulo === "") {
            return;
        }


        const novaTarefa = {
            id: Date.now(),
            titulo: titulo,
            concluida: false
        };


        tarefas.push(novaTarefa);

        salvarTarefas(tarefas);

        renderizarLista();

        configurarEventos();

        input.value = "";
    });
}