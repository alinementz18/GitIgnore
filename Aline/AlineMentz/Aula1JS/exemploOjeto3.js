const filme = {
    nome: "A guerra e o amor",
    direcao: "Eduardo",
    ano: 2019,
    elenco: ["Maria", "José", "João"],
    assistido: false,
    personagens: ["mae", "pai", "filho"]
}

filme.elenco[1] = "Xuxa"

console.log(filme.elenco[1])
