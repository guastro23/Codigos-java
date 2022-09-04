 class Circulo {
int radio; 
Circulo(int radio) {
this.radio = radio;
}

double calcularArea() {
return Math.PI*Math.pow(radio,2);
}

double calcularPerimetro() {
return 2*Math.PI*radio;
}
}

class rectangulo {
int base; 
int altura; 
rectangulo(int base, int altura) {
this.base = base;
this.altura = altura;
}

double calcularArea() {
return base * altura;
}

double calcularPerimetro() {
return (2 * base) + (2 * altura);
}
}

 class Cuadrado {
int lado; 
public Cuadrado(int lado) {
this.lado = lado;
}

double calcularArea() {
return lado*lado;
}

double calcularPerimetro() {
return (4*lado);
}
}

 class triangulorectangulo {
int base; 
int altura; 
public triangulorectangulo(int base, int altura) {
this.base = base;
this.altura = altura;
}

double calcularArea() {
return (base * altura / 2);
}

double calcularPerimetro() {
return (base + altura + calcularHipotenusa()); 

}

double calcularHipotenusa() {
return Math.pow(base*base + altura*altura, 0.5);
}

void determinarTipotriangulo() {
if ((base == altura) && (base == calcularHipotenusa()) && (altura
== calcularHipotenusa()))
System.out.println("Es un triangulo equilatero"); 
else if ((base != altura) && (base != calcularHipotenusa()) &&
(altura != calcularHipotenusa()))
System.out.println("Es un triangulo escaleno"); 
else
System.out.println("Es un triangulo isosceles"); 
}
}

public class PruebaFiguras {
public static void main(String args[]) {
Circulo figura1 = new Circulo(2);
rectangulo figura2 = new rectangulo(1,2);
Cuadrado figura3 = new Cuadrado(3);
triangulorectangulo figura4 = new triangulorectangulo(3,5);
System.out.println("El area del Circulo es = " + figura1.
calcularArea());
System.out.println("El Perimetro del Circulo es = " + figura1.
calcularPerimetro());
System.out.println();
System.out.println("El area del rectangulo es = " + figura2.
calcularArea());
System.out.println("El Perimetro del rectangulo es = " + figura2.
calcularPerimetro());
System.out.println();
System.out.println("El area del cuadrado es = " + figura3.
calcularArea());
System.out.println("El Perimetro del cuadrado es = " + figura3.
calcularPerimetro());
System.out.println();
System.out.println("El area del triangulo es = " + figura4.
calcularArea());
System.out.println("El Perimetro del triangulo es = " + figura4.
calcularPerimetro());
figura4.determinarTipotriangulo();
}
}




