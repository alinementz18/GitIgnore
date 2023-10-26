const leitor = require("readline-sync")

const pokemon = leitor.question("Digite o pokemon: ")

switch(pokemon){
    case 'Bulbasauro':
    console.log('Planta e Veneno')
    break
    case 'Charmander':
        console.log('Fogo')
        break
        case 'Squirtle':
            console.log('Água')
            
}
