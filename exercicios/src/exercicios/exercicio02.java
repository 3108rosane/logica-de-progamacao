/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package exercicios;

import java.util.Scanner;

/**
 *
 * @author rosane_maia
 */
public class exercicio02 {
     public static void main(String[] args) {
    Scanner leia = new Scanner (System.in);
    
    System.out.println("DIGITE A LARGURA");
    
    double largura = leia.nextDouble();
    
     System.out.println("DIGITE A ALTURA");
     
     double altura = leia.nextDouble();
     
     double result = largura * altura;
     
     System.out.println("AREA É IGUAL:" + result);
            
     }   
    
}
