import java.util.Scanner;
    class ejercicio15 {
        public static void main(String[] args) {
            System.out.println("Ejercicio ");
            Scanner input = new Scanner(System.in);
           int n1,n2,n3,n4;
            
            System.out.println("Dijite el peso de la esfera 1:");
            n1=input.nextInt();
            System.out.println("Dijite el peso de la esfera 2:");
            n2=input.nextInt();
           System.out.println("Dijite el peso de la esfera 3:"); 
           n3=input.nextInt();
           System.out.println("Dijite el peso de la esfera 4:"); 
            n4=input.nextInt();

           if(n1==n2 && n1==n3) {
            if (n4>n1) {
                System.out.println("La esfera 4 es la diferente y que tiene mayor peso");
                }else{
                    System.out.println("La esfera 4 es la diferente yque tiene menor peso");
                }
           

            

            } else if(n1==n3 && n1==n4){
            if (n2>n1) {
                System.out.println("La esfera 2 es la diferente y que tiene mayor peso");

            }else {
                System.out.println("La esfera 2 es la diferente y la  que tiene menor peso");
            }

            

           }else if (n1==n2 && n1==n4) {
            if (n3>n1) {
              System.out.println("La esfera 3 es la diferente y la que tiene mayor peso");  

            }else {
                System.out.println("La esfera 3 es la diferente y la que tiene menor peso");

            }

            

           }

           else{
            System.out.println("La esfera 1 es la diferente ");
            if (n1>n2) {
                System.out.println("y la que tiene mayor peso");
            }else{
                System.out.println("y la que tiene menor peso");
            }
           }

} 

     }
