interface Passaro {
    nome: string
    voarRapido(): void
}

interface Mamifero {
    nome: string
    nadarProfundo(): void
}


interface Reptil {
    nome: string
    mudarDeCor(): void
}

export class Aguia implements Passaro {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    voarRapido(): void {
        console.log(this.nome, "esta voando rápido")

    }
}

class Baleia implements Mamifero {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    nadarProfundo(): void {
        console.log(this.nome, "está nadando profundo")
    }
}

class Iguana implements Reptil {
    nome: string;

    constructor(nome:string){
        this.nome = nome
    }

    mudarDeCor(): void {
        console.log(this.nome, "está mudando de cor")
    }
}