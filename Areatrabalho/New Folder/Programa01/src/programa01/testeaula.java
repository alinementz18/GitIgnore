package programa01;

import java.util.Scanner;

public class testeaula {

    public static void main(String[] args) {

        int i = 0;
        double numero = 0;
        double resultado = 0;
        Scanner lerTeclado = new Scanner(System.in);

        System.out.println("Digite um numero");
        numero = lerTeclado.nextDouble();

        for (i = 0; i <= 50; i++) {
            System.out.println("O resultado de" + numero + "x" + i + "é igual a " + (numero * i));
        }

        
    }
}
