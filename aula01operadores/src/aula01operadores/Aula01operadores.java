package aula01operadores;

public class Aula01operadores {

    
    public static void main(String[] args) {
        //ARITMÉTICOS
        int a = 10 + 1;
        int b = a + 10;
        int c = b * 3;
        int d = c / 2;
        double e = 4.5 + 1.7;
        
        String mostrarA = "o valor A: " + a;
        System.out.println("o valor de A:" + a);
                
                
              
        
        a += 10;
        b -= 1;
        c *= 5;
        d /= 1;
        
        System.out.println("valor de A:" + a);
        System.out.println ("valor de B " + b);
        System.out.println("valor de C " + c);
        System.out.println("valor de D " + d);
        System.out.println("valor de E " + e);
        System.out.println(10 +10);
        
        
        //---------------------------------------/
        // LÓGICOS
        
        boolean ehMaior = 10 > 20;
        boolean ehMenor = 10< 20;
        boolean ehMenorIgual = 10 <= 20;
        boolean ehMaiorIgual = 10 >= 20;
        boolean ehIgual = 10 == 20;
        boolean ehDiferente = 10 != 20;
        
        System.out.println(10 > 20);
        System.out.println("Maior:" + ehMaior);
        System.out.println("Menor:" + ehMenor);
        System.out.println("Menor Igual:" + ehMenorIgual);
        System.out.println("Maior Igual:" + ehMaior);
        System.out.println("Igual:" + ehIgual);
        System.out.println("Diferente:" + ehDiferente);
        
        //----------------------------------/
        // LÓGICOS  
        
        boolean valor = (10 > 9)&& (5 > 1);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        boolean valor3 = false || true;
        boolean valor4 = false || false;
        boolean valor5 = 10 > 9 || 5 > 1;
        boolean valor6 = ((10 > 9 ) && (5 > 1 )) || ((120 < 1)&& 31 > 3 );
        
        boolean negação = !true;
        boolean negação2 = !valor6;
        
        
        
    }
    
}
