import java.util.Scanner;
    class triangulo {
        public static void main(String[] args) {
            System.out.println("Triangulo");
            Scanner input = new Scanner(System.in);
            Double lado,area,perimetro,altura,base;

            System.out.println("dijite los lados del triangulo equilatero:");

            lado=input.nextDouble();
            perimetro=lado*3;
            base=lado/2;
            altura=Math.sqrt(Math.pow(lado,2)-Math.pow(base,2));
            area=(lado*altura)/2;

            System.out.println("El perimetro del triangulo es"+perimetro+"\n"+"Su altura es: "+altura+"\n"+"Su area es: "+area);
            
}
}