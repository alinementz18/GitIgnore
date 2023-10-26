let nome1 = "Elon Musk"
let nome2 = "Jeff Bezos"
let nome3 = "Bell Gates"

function formatar(nome) {
    nome = nome.trim()
    nome = nome.replaceAll(" ", "-")
    nome = nome.toLowerCase()

    return nome
}

console.log(formatar(nome1))

console.log(formatar("Vitor Hugo"))