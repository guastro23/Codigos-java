import java.util.Scanner;
    class ejercicio7{
        public static void main(String[] args) {
            System.out.println("Ejercicio ");
            Scanner input = new Scanner(System.in);
           int n1,n2;
           System.out.println("Dijite el primer numero: ");

           n1=input.nextInt();
           System.out.println("Dijite el segundo numero: ");
           n2=input.nextInt(); 

           if(n1>n2) {

            System.out.println("El numero: "+n1+"es mayor que: "+n2);

           }else if(n2>n1){

            System.out.println("El numero: "+n2+"es mayor que: "+n1);;

           }else{

            System.out.println("El numero: "+n1+" es igual a: "+n2);

           }

} 

     }
