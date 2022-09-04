import java.util.Scanner;
class ejercicio13{
    public static void main(String[] args) {
    Scanner input=new Scanner(System.in);

    Double VALORCOMP,VALPAG,PDES;

    String COLOR;

    System.out.println("Dijite el valor de la compra: $");
    VALORCOMP=input.nextDouble();

    System.out.println("Color de la bola sacada: ");
    COLOR=input.next();

    if (COLOR.equalsIgnoreCase("BLANCO")) {
        PDES=0.0;
    }else if(COLOR.equalsIgnoreCase("VERDE")){
            PDES=10.0;
    }else if(COLOR.equalsIgnoreCase("AMARILLO")){
                PDES=25.0;
    }else if(COLOR.equalsIgnoreCase("AZUL")){
                    PDES=50.0;
    }else{
        PDES=100.0;
    }

    VALPAG=VALORCOMP-PDES*VALORCOMP/100.0;

    int VALPAG_1= VALPAG.intValue();
    int PDES_1= PDES.intValue();
    int VALORCOMP_1= VALORCOMP.intValue();


    System.out.println("El valor de la compra es : $"+VALORCOMP_1+"\n"+"El cliente debe pagar: $"+VALPAG_1+"\n"+"tiene un descuento del : "+PDES_1+"%"+"\n"+"El color de la bola es : "+COLOR);

    }
        }    



