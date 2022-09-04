
import java.util.Scanner;
class HelloWorld {
    public static void main(String[] args) {
    Scanner input=new Scanner(System.in);
    System.out.println("Ingrese el nombre del trabajador");
    String NOMT=input.next();
    System.out.println("Ingrese el numero de horas trabajadas");
    Double NHOT=input.nextDouble();
    System.out.println("Ingrese el valor de horas de trabajo");
    Double VHT=input.nextDouble();
    System.out.println("Ingrese las horas extras trabajadas");
    int HET=input.nextInt();
    System.out.println("Ingrese horas extras que exceden mas de 8");
    Double OEE8=input.nextDouble();
    Double salario;
if  (NHOT>40)
if (HET=NHOT>8)
    HEE8=HET-8;
    salario=40VHT+HETNHOT+VHT+HEE8
    System.out.println("El trabajador"+NOMT+"Devengo:$"+salario);

    
    
    
                    



    }
}