export class Aluno {
    private matricula: number;
    private  nome: string;
    private notaProva1: number;
    private notaProva2: number;
    private notaTrabalho: number;
    


    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }

    media(): number {
        return (this.notaProva1 + this.notaProva2) / 2;

    }

    final(): number {
        return (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3
    }
}


