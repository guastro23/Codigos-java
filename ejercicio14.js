import java.util.Scanner;
class ejercicio14 {
    public static void main(String[] args) {
    Scanner input=new Scanner(System.in);

    Double VD1,VD2,VD3,SALAR,TOTVEN,PORVEN,SALAR1,SALAR2,SALAR3;

    System.out.println("Digite las ventas del departamento1:");
    VD1=input.nextDouble();
    System.out.println("Digite las ventas del departamento2:");
    VD2=input.nextDouble();
    System.out.println("Digite las ventas del departamento3:");
    VD3=input.nextDouble();
    System.out.println("Digite el salario que reciben los vendedores:");
    SALAR=input.nextDouble();
    
    TOTVEN=VD1+VD2+VD3;
    PORVEN=0.33*TOTVEN;

    if (VD1>PORVEN) {
        SALAR1=SALAR+0.2*SALAR;
    }else{
        SALAR1=SALAR;
    }
    if (VD2>PORVEN) {
        SALAR2=SALAR+0.2*SALAR;
    }else {
        SALAR2=SALAR;
    }
    if (VD3>PORVEN) {
        SALAR3=SALAR+0.2*SALAR;
    }else{
        SALAR3=SALAR;  
    }

    int SALAR_1=  SALAR1.intValue();
    int SALAR_2=  SALAR2.intValue();
    int SALAR_3=  SALAR3.intValue();

    System.out.println("Salario del vendedor DEPTO.1: $"+SALAR_1+"\n"+"Salario del vendedor DEPTO.2: $"+SALAR_2+"\n"+"Salario del vendedor DEPTO.3: $"+SALAR_3);

}
    }
