import java.util.Scanner;
    class trabajos {
        public static void main(String[] args) {
            System.out.println("Ejercicio ");
            Scanner input = new Scanner(System.in);
           int n1,n2,n3;

           System.out.println("Dijite tres numeros distintos:");

           n1=input.nextInt();
           n2=input.nextInt(); 
           n3=input.nextInt();

           if(n1>n2 && n2>n3) {

            System.out.println("El numero mayor es:"+n1);

           }else if(n2>n1 && n1>n3){

            System.out.println("Dijite tres numeros distintos:"+n2);

           }else{

            System.out.println("Dijite tres numeros distintos:"+n3);

           }

} 

     }
