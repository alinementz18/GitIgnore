//Atividade: Você terá que criar a classe Carro . Nesta classe, você irá implementar as seguintes propriedades:

//Um veículo tem um certo consumo de combustível (km/L) e uma certa quantidadede combustível no tanque;
//O nível de combustível inicial é 0;

//Forneça um método andar() que simule o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível
//no tanque de gasolina. Esse método recebe como parâmetro a distância em km;

//Forneça um método obterGasolina() , que retorna o nível atual de combustível;

//Forneça um método adicionarGasolina() , para abastecer o tanque;

export class Carro {
    //private serve para poder ser utilizado somente na class
    private consumo: number;
    private quantidadeDeCombustivel: number;

    constructor(consumo: number) {

        this.consumo = consumo;
        this.quantidadeDeCombustivel = 0;
    }

    //Um veículo tem um certo consumo de combustível (km/L) e uma certa quantidadede combustível no tanque;
    //O nível de combustível inicial é 0;

    //Forneça um método andar() que simule o ato de dirigir o veículo por uma certa
    //distância, reduzindo o nível de combustível no tanque de gasolina. Esse método
    //recebe como parâmetro a distância em km;

    adicionarGasolina(litros: number) {
        if (litros > 0) {
            this.quantidadeDeCombustivel += litros
        }
    }


    andar(km: number) {
        const gastoDeCombustivel = km / this.consumo;

        if (gastoDeCombustivel <= this.consumo) {
            this.quantidadeDeCombustivel -= gastoDeCombustivel
            console.log(`Voce andou ${km}`)
        } else {
            console.log(`Não há combustível suficiente para a viagem.`)
        }
    }


    obterGasolina() {
        console.log(`Nível de combustível: ${this.quantidadeDeCombustivel} litros`);
    }
}