/**
* Esta clase define objetos de tipo triangulo rectangulo con una
* base y una altura como atributos.
* @version 1.2/2020
*/
public class triangulorectangulo {
int base; // Atributo que define la base de un triangulo rectangulo
int altura; // Atributo que define la altura de un triangulo rectangulo
/**
* Constructor de la clase triangulorectangulo
* @param base Parámetro que define la base de un triangulo
* rectangulo
* @param altura Parámetro que define la altura de un triangulo
* rectangulo
*/
public triangulorectangulo(int base, int altura) {
this.base = base;
this.altura = altura;
}
/**
* Método que calcula y devuelve el area de un triangulo rectangulo
* como la base multiplicada por la altura sobre 2
* @return area de un triangulo rectangulo
*/
double calcularArea() {
return (base * altura / 2);
}
/**
* Método que calcula y devuelve el perimetro de un triangulo
* rectangulo como la suma de la base, la altura y la hipotenusa
* @return perimetro de un triangulo rectangulo
*/
double calcularPerimetro() {
return (base + altura + calcularHipotenusa()); /* Invoca al
método calcular hipotenusa */
}

/**
* Método que calcula y devuelve la hipotenusa de un triangulo
* rectangulo utilizando el teorema de Pitágoras
* @return Hipotenusa de un triangulo rectangulo
*/
double calcularHipotenusa() {
return Math.pow(base*base + altura*altura, 0.5);
}
/**
* Método que determina si un triangulo es:
* - Equilatero: si sus tres lados son iguales
* - Escaleno: si sus tres lados son todos diferentes
* - Escaleno: si dos de sus lados son iguales y el otro es diferente de
* los demás
*/
void determinarTipotriangulo() {
if ((base == altura) && (base == calcularHipotenusa()) && (altura
== calcularHipotenusa()))
System.out.println("Es un triangulo equilátero"); /* Todos sus
lados son iguales */
else if ((base != altura) && (base != calcularHipotenusa()) &&
(altura != calcularHipotenusa()))
System.out.println("Es un triangulo escaleno"); /* Todos sus
lados son diferentes */
else
System.out.println("Es un triangulo isósceles"); /* De otra
manera, es isósceles */
}
}