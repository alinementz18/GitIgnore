/*Implemente uma função em Java que recebe um valor inteiro e verifica-se o valor é par.
A função deve retornar true se o numero for par e false se for impar. Na função principal,
deverá haver o retorno ao usuario, se o numero informado é par ou impar. */

package programa01;

import java.util.Scanner;

public class exercicioaula {
    
    public static void main(String[] args) {
        Scanner lerTeclado = new Scanner(System.in);
        
        int valor = 0;
        boolean resultado;
        
        System.out.println("Digite um numero");
        valor = lerTeclado.nextInt();
        
        resultado = isPar(valor);
        
        if(resultado == true){
        System.out.println("eh par");
        }
        else{
        System.out.println("eh impar");    
        }
    }
        
    public static boolean isPar(int numero){
        
        boolean teste = false;
   
    
    if(numero % 2 == 0){
      teste = true;  
    }
    else{
      teste = false; 
    }
    System.out.println(teste);  
    
    return teste;
        
            }
        
    
    
}
