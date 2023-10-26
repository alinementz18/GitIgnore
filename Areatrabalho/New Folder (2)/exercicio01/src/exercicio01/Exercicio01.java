//crie um programa para receber a distancia em km e a quantidade de litros de gasolina
// consumidos por um automovel de passeio em um percurso
//calcular o consumo em km/l e escrever a mensagem ao usuario

//menor que 8 - vanda o carro
//entre 8 e 14 - economico
// maior 14 - super economico
package exercicio01;

import java.util.Scanner;


public class Exercicio01 {
   
    public static void main(String[] args) {
        
        double distancia =  0;
        double litros = 0;
        double consumo = 0;
        Scanner lerTeclado = new Scanner(System.in);
        
        System.out.println("Digite a distancia");
        distancia = lerTeclado.nextDouble();
        
        System.out.println("Digite a quantidade de litros");
        litros = lerTeclado.nextDouble();
        
        consumo = distancia / litros;
        
        if(consumo == 8){
            System.out.println("Venda o carro");
        }
         else if (consumo <14){
         System.out.println("Venda o carro");     
        }
         else{
        System.out.println("Super Economico"); 
    }
     
    }
}
