/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package exercicios;

import java.util.Scanner;


public class exercicio02 {
     public static void main(String[] args) {
    Scanner s = new Scanner (System.in);
    
    System.out.println("DIGITE A LARGURA");
    
    double largura = s.nextDouble();
    
     System.out.println("DIGITE A ALTURA");
     
     double altura = s.nextDouble();
     
     double area = largura * altura;
     
     System.out.println("AREA É:" + area);
            
     }   
    
}
