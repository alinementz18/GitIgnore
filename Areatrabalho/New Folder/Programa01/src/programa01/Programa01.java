
package programa01;

import java.util.Scanner;

public class Programa01 {

    public static void main(String[] args) {
        
        //Declarar as variaveis
        double valor1 = 0;
        double valor2 = 0;
        double resultado = 0;
        Scanner lerTeclado = new Scanner(System.in);
        
        //Solicitar dados para o usuario
        System.out.println("Digite um valor");
        valor1 = lerTeclado.nextDouble();
        
        System.out.println("Digite outro valor");
        valor2 = lerTeclado.nextDouble();
        
        //Processar os dados -> multiplicação de dois valores
        resultado = valor1 * valor2;
                
        
        System.out.println("Resultado da multiplicacao" + resultado);
    
    }
    
}
