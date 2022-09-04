import java.util.Scanner;
    class trabajos {
        public static void main(String[] args) {
            System.out.println("Triangulo de Heron");
            Scanner input = new Scanner(System.in);
            Double lado1,lado2,lado3;
            
            
            System.out.println("Dijite el lado1 del triangulo");
             lado1= input.nextDouble();

             System.out.println("Dijite el lado2 del triangulo");
             lado2= input.nextDouble();

             System.out.println("Dijite el lado3 del triangulo");
             lado3= input.nextDouble();

            Double perimetro,semiperimetro,area;
            perimetro=lado1+lado2+lado3;
            
            semiperimetro= perimetro/2;
            area=Math.sqrt(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*(semiperimetro-lado3));

            System.out.println("El perimetro es de:"+perimetro);
            System.out.println("El semiperimetro es de:"+semiperimetro);
            System.out.println("El area es de:"+area);

}
  }
