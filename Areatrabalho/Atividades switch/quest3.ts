export class Voo {
    private numeroVoo: string;
    private data: string;
    private passageiros: boolean[]=[];

    constructor(numeroVoo: string, data: string) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.passageiros = Array(100).fill(false);
    }

    proximoLivre(): number {
        for (let i=0; i < this.passageiros.length; i++) {
            if (!this.passageiros[i]) {
                return i + 1
            }
        }
        return -1; 
    }

    verifica(cadeira: number): boolean {
        return this.passageiros[cadeira-1] 
    }

    ocupa(cadeira: number): boolean {
        if (!this.verifica(cadeira)) {
            this.passageiros[cadeira - 1] = true;
            return true;
        }
        return false;
    }

    vagas(): number {
        return this.passageiros.filter(ocupado => !ocupado).length;
    }

    getVoo(): string {
        return this.numeroVoo;
    }

    getData(): string {
        return this.data;
    }

    clone(): Voo {
        return new Voo(this.numeroVoo, this.data);
    }
}

// Exemplo de uso:
