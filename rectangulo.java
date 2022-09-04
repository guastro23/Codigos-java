/**
* Esta clase define objetos de tipo rectangulo con una base y una
* altura como atributos.
* @version 1.2/2020
*/
public class rectangulo {
int base; // Atributo que define la base de un rectangulo
int altura; // Atributo que define la altura de un rectangulo
/**
* Constructor de la clase Rectangulo
* @param base Parámetro que define la base de un rectangulo
* @param altura Parámetro que define la altura de un rectangulo
*/
rectangulo(int base, int altura) {
this.base = base;
this.altura = altura;
}
/**
* Método que calcula y devuelve el area de un rectangulo como la
* multiplicación de la base por la altura
* @return area de un rectangulo
*/
double calcularArea() {
return base * altura;
}
/**
* Método que calcula y devuelve el perímetro de un rectangulo
* como (2 * base) + (2 * altura)
* @return Perímetro de un rectangulo
*/
double calcularPerimetro() {
return (2 * base) + (2 * altura);
}
}