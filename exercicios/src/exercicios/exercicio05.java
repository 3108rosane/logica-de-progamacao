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
public class exercicio05 {
    
    public static void main(String[] args) {
        Scanner s  = new Scanner (System.in);
        
        System.out.println("INFORME A TEMPERATURA");
        
        double celsios = s.nextInt();
        
        double fahrenheit = (1.8 * celsius) + 32;
        double kelvin = celsius + 273.15;
        
        
        System.out.println("CELSIUS: " + celsius + "ºc");
        
        
        
        System.out.println("FAHRENHEIT: " + fahrenheit + "ºF");
        
        
        
        
        
         System.out.println( "KELVIN " + kelvin + "º K");
}