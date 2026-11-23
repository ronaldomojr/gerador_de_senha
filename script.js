const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-"

function gerarSenha() {
    const quantidade = Number(document.getElementById("quantidade").value)

    if (quantidade < 8) {
        mostrarMensagem("A senha precisa ter no mínimo 8 caracteres")
        return
    }

    let senha = ""

    for (let i = 0; i < quantidade; i++) {
        const aleatorio = Math.floor(Math.random() * caracteres.length)
        senha = senha + caracteres.charAt(aleatorio)
    }

    document.getElementById("senha").value = senha
    esconderMensagem()
}

function copiar() {
    const valor = document.getElementById("senha").value

    if (valor) {
        navigator.clipboard.writeText(valor)
        mostrarMensagem("Senha Copiada")
    } else {
        mostrarMensagem("Nenhuma senha foi gerada")
    }
}

function mostrarMensagem(texto) {
    const mensagem = document.getElementById("mensagem")
    mensagem.innerHTML = texto
    mensagem.style.display = "block"
}

function esconderMensagem() {
    document.getElementById("mensagem").style.display = "none"
}
