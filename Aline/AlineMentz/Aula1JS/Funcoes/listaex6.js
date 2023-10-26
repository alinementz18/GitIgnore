//o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi
//emitida (nessa ordem). A função deve imprimir no console um booleano
//(true ou false) que indica se a carteira precisa ser renovada ou não. A
//carteira precisa ser renovada segundo os seguintes critérios:

const leitor = require("readline-sync")
const anoAtual = leitor.questionInt("Qual ano atual? ")
const anoNascimento = leitor.questionInt("Qual ano de nascimento? ")
const anoCarteira = leitor.questionInt("Qual ano de emissão da carteira de identudade? ")

const idade = anoAtual - anoNascimento
const dataEmissao = anoAtual - anoCarteira

function renovacao () {
    if (idade <= 20 && dataEmissao) {
        return true
    }
    
}