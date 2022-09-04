import java.util.Scanner;
class ejercicio 12 {
    public static void main(String[] args) {
    Scanner input=new Scanner(System.in);

    String NOM;
    int NHT,VHN,HET,HEE8,SALARIO;

    System.out.println("Ingrese el nombre del trabajador");
    NOM= input.next();

    System.out.println("Ingrese numero de horas trabajadas");
    NHT=input.nextInt();

    System.out.println("Ingrese valor de hora normal trabajada");
    VHN=input.nextInt();
    

    System.out.println("Ingrese horas extra trabajadas");
    HET=input.nextInt();
    

    System.out.println("Ingrese horas extras que exceden de 8");
    HEE8=input.nextInt();

    if (NHT>40) {
        HET=NHT-40;
        if (HET>8) {
            HEE8=HET-8;
            SALARIO=40*VHN+16*VHN+HEE8*3*VHN;
        }else {
            SALARIO=40*VHN+HET*2*VHN;
        }
    }else{
        SALARIO=NHT*VHN;

    }
    System.out.println("El trabajador"+NOM+"Devengo:$"+SALARIO);
}
    }   