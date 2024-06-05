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
public class exercicio04{ 
    public static void main(String[] args) {
        Scanner s  = new Scanner (System.in);
        
        System.out.println("DIGITE O TOTAL DE ELEITORES:");
        
        int eleitores = s.nextInt();
        
        System.out.println("DIGITE QTD VOTOS NULOS:");
        
        int nulos  = s.nextInt();
        
        System.out.println("DIGITE QTD VOTOS BRANCOS:");
        
        int brancos = s.nextInt();
        
        
        System.out.println("DIGITE QTD VOTOS VALIDOS:");
        
        int validos = s.nextInt();
        
        double nulosPercentual = (nulos * 100 )/ eleitores;
        double brancosPercentual = (brancos * 100 )/ eleitores;
        double validosPercentual = (validos * 100 )/ eleitores;
        
        System.out.println("PORCENTAGEM NULOS:" + nulosPercentual +"%");
        System.out.println("PORCENTAGEM BRANCOS:" + brancosPercentual +"%");
        System.out.println("PORCENTAGEM VALIDOS:" + validosPercentual +"%");
                
                

}
} 
