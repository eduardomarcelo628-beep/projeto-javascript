export function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("tarefas");

    return tarefasSalvas
        ? JSON.parse(tarefasSalvas)
        : [
            {
                id: 1,
                titulo: "Estudar JavaScript",
                concluida: false
            },
            {
                id: 2,
                titulo: "Fazer a Experiência Prática III",
                concluida: true
            }
        ];
}


export function salvarTarefas(tarefas) {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}