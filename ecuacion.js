
    import java.util.Scanner;
        class ejercicio24 {
            public static void main(String[] args) {
                System.out.println("Ejercicio ");
                Scanner input = new Scanner(System.in); {
                    Double  a,b,c;

                System.out.println("Dijite el valor a: ");
                a=input.nextDouble();

                System.out.println("Dijite el valor b: ");
                b=input.nextDouble();

                System.out.println("Dijite el valor c: ");
                c=input.nextDouble();
     
        double discri = (Math.pow(b, 2) - (4 * a * c));
        if (discri >= 0) {
            
            if(discri == 0){
     
     
                Double solucion = ((-b) - (4 * a * c))/(2 * a);

                System.out.println("La solucion es: "+solucion);
     
            
            }else{
     
               Double solucion_n,solucion_p;
     
                solucion_p = ((-b) + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
     
                solucion_n = ((-b) - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

                System.out.println("las soluciones son: "+solucion_p+"\n"+solucion_n);
     
            } 
        }else {
            
            System.out.println("No tiene soluciones");
     
    }

    }
    }
    }
