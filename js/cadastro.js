export function renderCadastro() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section>

            <h1>Cadastro</h1>

            <form id="form-cadastro">

                <label for="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                >

                <label for="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                >

                <label for="senha">Senha:</label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                >

                <label for="confirmar-senha">
                    Confirmar senha:
                </label>

                <input
                    type="password"
                    id="confirmar-senha"
                    name="confirmar-senha"
                >

                <button type="submit">
                    Cadastrar
                </button>

            </form>

        </section>
    `;


    const formulario = document.getElementById("form-cadastro");


    function mostrarErro(campo, mensagem) {

        campo.classList.add("campo-erro");

        const aviso = document.createElement("small");

        aviso.classList.add("mensagem-erro");

        aviso.textContent = mensagem;

        campo.insertAdjacentElement("afterend", aviso);
    }


    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const nome = document.getElementById("nome");

        const email = document.getElementById("email");

        const senha = document.getElementById("senha");

        const confirmarSenha =
            document.getElementById("confirmar-senha");


        if (nome.value.trim() === "") {

            mostrarErro(
                nome,
                "Por favor, informe seu nome."
            );

            return;
        }


        if (email.value.trim() === "") {

            mostrarErro(
                email,
                "Por favor, informe seu e-mail."
            );

            return;
        }


        if (!email.value.includes("@")) {

            mostrarErro(
                email,
                "Informe um e-mail válido."
            );

            return;
        }


        if (senha.value.length < 6) {

            mostrarErro(
                senha,
                "A senha deve ter pelo menos 6 caracteres."
            );

            return;
        }


        if (senha.value !== confirmarSenha.value) {

            mostrarErro(
                confirmarSenha,
                "As senhas não coincidem."
            );

            return;
        }


        const sucesso = document.createElement("p");

        sucesso.textContent =
            "Cadastro realizado com sucesso!";

        sucesso.classList.add("cadastro-sucesso");

        formulario.appendChild(sucesso);
    });
}