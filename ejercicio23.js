import java.util.Scanner;
    class ejercicio24 {
        public static void main(String[] args) {
            System.out.println("Ejercicio ");
            Scanner input = new Scanner(System.in);

            Double a,b,c,solp,soln;

            System.out.println("Dijite el valor a: ");
            a=input.nextDouble();

            System.out.println("Dijite el valor b: ");
            b=input.nextDouble();

            System.out.println("Dijite el valor c: ");
            c=input.nextDouble();

            solp= (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
            soln= (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;

            int  sol_p= solp.intValue();
            int sol_n= soln.intValue();

            System.out.println("La escuacion queda de la siguiente manera: "+a+"x^2 + "+b+"x + "+c+" =0");


            System.out.println("Las posibles soluciones son: "+sol_p+"\n"+"y"+sol_n);
}
}


