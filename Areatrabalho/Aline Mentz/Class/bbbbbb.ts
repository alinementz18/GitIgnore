/*Missão 2: A Herança dos Antigos Protetores
A Floresta Encantada é guardada por criaturas antigas e poderosas. Nesta missão,
você deve utilizar a herança para criar subclasses de criaturas mágicas. Crie uma
classe CriaturaMagica com atributos e métodos que são comuns a todas as
criaturas.
Em seguida, crie subclasses como GuardiãoAncião , DragãoMilenar , SereiaEncantada ,
etc., cada uma com características únicas e específicas. Utilize a herança para
compartilhar os atributos e métodos comuns entre as subclasses */

/*Missão 3: O Poder das Interfaces Místicas
Enchanted Woodland 2
As criaturas mágicas possuem habilidades especiais que devem ser tratadas de
forma única. Nesta missão, você deve utilizar interfaces para definir contratos entre
as criaturas e suas habilidades.
Crie uma interface HabilidadeMagica que exija a implementação de métodos como
usarMagia() , conjurarFeitiço() , etc. Em seguida, faça suas subclasses de criaturas
mágicas implementarem essas interfaces para que cada uma possa utilizar suas
habilidades de forma única*/

interface HabilidadeMagica {
    usarMagia(): void;
    conjurarFeitico(): void;
}

export class CriaturaMagica implements HabilidadeMagica {
    private nome: string
    private tipo: string

    constructor(nome: string, tipo: string) {
        this.nome = nome
        this.tipo = tipo
    }

    public getNome(): string {
        return this.nome;
    }

    public getTipo(): string {
        return this.tipo;
    }
    public usarMagia(): void {
        console.log(this.nome, "está usando magia")
    }
    public conjurarFeitico(): void {
        console.log(this.nome, "está conjurando feitiço")
    }

}

export class GuardiaoAnciao extends CriaturaMagica {
    constructor(nome: string) {
        super(nome, "Gandlf, o Guardião Ancião");
    }
}

export class DragaoMilenar extends CriaturaMagica {
    constructor(nome: string) {
        super(nome, "Niv, o Dragão Milenar");
    }
}

export class SereiaEncantada extends CriaturaMagica {
    constructor(nome: string) {
        super(nome, "Ariel, a Sereia Encantada");
    }
}