import java.util.Scanner;
class ejercicio22 {
    public static void main(String[] args) {
    Scanner input=new Scanner(System.in);

    String NOM;
    int shoras,nhoras,SALARIO;

    System.out.println("Ingrese el nombre del trabajador:");
    NOM= input.next();

    System.out.println("Ingrese numero de horas trabajadas en el mes:");
    nhoras=input.nextInt();

    System.out.println("salario basico por hora:");
    shoras=input.nextInt();
    
    SALARIO=nhoras*shoras;

    if (SALARIO>450000) {
        System.out.println("El nombre del empleado es:"+NOM+"\n"+"y gana: $"+SALARIO);
    }else{
        System.out.println("El nombre del empleado es:"+NOM);
    }

    
}
    }   