import java.util.Scanner;
class ejercicio22 {
    public static void main(String[] args) {
    Scanner input=new Scanner(System.in);

    String NOM; 
    Double cod,shoras,nhoras,salariob,salarion,reten,reten_1;

    System.out.println("Ingrese el codigo del empleado:");
    cod= input.nextDouble();

    System.out.println("Ingrese el nombre del empleado:");
    NOM= input.next();

    System.out.println("Ingrese numero de horas trabajadas en el mes:");
    nhoras=input.nextDouble();

    System.out.println("salario basico por hora:");
    shoras=input.nextDouble();

    System.out.println("Ingrese el porcentaje de retencion: ");
    reten=input.nextDouble();
    
    salariob=nhoras*shoras;
    reten_1=reten/100;
    salarion=(salariob-(reten_1*salariob));

    int salario_b=  salariob.intValue();
    int salario_n=  salarion.intValue();
    int cod_1=  cod.intValue();

    System.out.println("El codigo del empleado es: "+cod_1+"\n"+"El nombre del empleado es: "+NOM+"\n"+"El salario bruto del empleado es: $"+salario_b+"\n"+"El salario neto del empleado es: $"+salario_n);


    

    
}
    }   