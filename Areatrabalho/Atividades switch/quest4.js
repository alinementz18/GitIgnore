var Prova = /** @class */ (function () {
    function Prova(gabarito) {
        this.gabarito = gabarito;
        this.respostasAluno = [];
    }
    Prova.prototype.respostaAluno = function (resposta) {
        if (this.respostasAluno.length < 15) {
            this.respostasAluno.push(resposta.toUpperCase());
        }
        else {
            console.log('A prova já foi totalmente respondida.');
        }
    };
    Prova.prototype.acertos = function () {
        var pontos = 0;
        for (var i = 0; i < this.respostasAluno.length; i++) {
            if (this.respostasAluno[i] === this.gabarito[i]) {
                pontos += (i < 10) ? 0.5 : 1;
            }
        }
        return pontos;
    };
    Prova.prototype.nota = function () {
        return this.acertos();
    };
    Prova.prototype.maior = function (outraProva) {
        var minhaPontuacao = this.acertos();
        var outraPontuacao = outraProva.acertos();
        if (minhaPontuacao > outraPontuacao) {
            return 1;
        }
        else if (minhaPontuacao < outraPontuacao) {
            return -1;
        }
        else {
            return 0;
        }
    };
    return Prova;
}());
var gabarito = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];
var prova1 = new Prova(gabarito);
var prova2 = new Prova(gabarito);
prova1.respostaAluno('A');
prova1.respostaAluno('B');
prova1.respostaAluno('C');
prova1.respostaAluno('D');
prova1.respostaAluno('E');
prova1.respostaAluno('A');
prova1.respostaAluno('B');
prova1.respostaAluno('C');
prova1.respostaAluno('D');
prova1.respostaAluno('E');
prova1.respostaAluno('A');
prova1.respostaAluno('B');
prova1.respostaAluno('C');
prova1.respostaAluno('D');
prova1.respostaAluno('E');
prova2.respostaAluno('A');
prova2.respostaAluno('B');
prova2.respostaAluno('C');
prova2.respostaAluno('D');
prova2.respostaAluno('E');
prova2.respostaAluno('E');
prova2.respostaAluno('D');
prova2.respostaAluno('C');
prova2.respostaAluno('B');
prova2.respostaAluno('A');
prova2.respostaAluno('A');
prova2.respostaAluno('B');
prova2.respostaAluno('C');
prova2.respostaAluno('D');
prova2.respostaAluno('E');
console.log('Prova 1 - Acertos:', prova1.acertos());
console.log('Prova 1 - Nota:', prova1.nota());
console.log('Prova 2 - Acertos:', prova2.acertos());
console.log('Prova 2 - Nota:', prova2.nota());
var resultado = prova1.maior(prova2);
if (resultado === 1) {
    console.log('Prova 1 tem maior pontuação.');
}
else if (resultado === -1) {
    console.log('Prova 2 tem maior pontuação.');
}
else {
    console.log('As provas têm a mesma pontuação.');
}
