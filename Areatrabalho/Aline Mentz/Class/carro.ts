/* Crie uma classe "Carro" com propriedades como marca, modelo, ano e métodos para ligar,
desligar e acelerar o carro */

export class Carro{
    marca: string;
    modelo: string;
    ano: number;
    ligado: boolean;
    velocidade: number;

    constructor(marca: string, modelo:string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
        this.velocidade = 0; 
    }

    ligar(): void{
        if (!this.ligado){
            this.ligado = true;
            console.log("O carro foi ligado");
        } else {
            console.log("O carro já está ligado!")
        }
    }

    desligar(): void{
        if(this.ligado){
            this.ligado = false;
            console.log("O carro foi desligado")
        } else {
            console.log("O carro já está desligado!")
        }
    }

    acelerar(velocidade: number): void {
        if (this.ligado) {
            this.velocidade += velocidade;
            console.log("O carro acelerou para: ", this.velocidade, "hm/h");
        } else {
            console.log("Não foi possível acelerar o carro, pois está desligado");
        }
    }

}

const civic = new Carro("Honda", "Civic", 2022);
    civic.ligar();
    civic.acelerar(50);
    civic.desligar();