import java.util.Scanner;
    class ejercicio24 {
        public static void main(String[] args) {
            System.out.println("Ejercicio ");
            Scanner input = new Scanner(System.in);
           int n1,n2,n3;
            
            System.out.println("Dijite el peso de la esfera 1:");
            n1=input.nextInt();
            System.out.println("Dijite el peso de la esfera 2:");
            n2=input.nextInt();
           System.out.println("Dijite el peso de la esfera 3:"); 
           n3=input.nextInt();

           if(n1>n2 && n2>n3) {

            System.out.println("La esfera 1 es la que tiene mayor peso");

           }else if(n2>n1 && n1>n3){

            System.out.println("La esfera 2 es la que tiene mayor peso");

           }else{

            System.out.println("La esfera 3 es la que tiene mayor peso");

           }

} 

     }
