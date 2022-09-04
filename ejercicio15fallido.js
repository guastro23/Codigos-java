import java.util.Scanner;
class ejercicio15 {
    public static void main(String[] args) {
    Scanner input=new Scanner(System.in);

    Double PESOA,PESOB,PESOC,PESOD;
    System.out.println("Digite el peso de la ESFERA A: ");
    PESOA=input.nextDouble();
    System.out.println("Digite el peso de la ESFERA B: ");
    PESOB=input.nextDouble();
    System.out.println("Digite el peso de la ESFERA C: ");
    PESOC=input.nextDouble();
    System.out.println("Digite el peso de la ESFERA D: ");
    PESOD=input.nextDouble();

    if (PESOA==PESOB && PESOA==PESOC) {
        if (PESOD>PESOA) {
            System.out.println("La ESFERA D es la diferente");
        }else {
            System.out.println("y es de mayor peso");

        }
    }   else if(PESOA==PESOB && PESOA==PESOD){
            System.out.println("La ESFERA C es la diferente");
            if (PESOC>PESOA) {
                System.out.println("y es de mayor peso");
            }else {
                System.out.println("y es de menor peso");
            }
    }else if (PESOA==PESOC && PESOA==PESOD){
                System.out.println("La ESFERA B es la diferente");
             if (PESOB>PESOD) {
                System.out.println("y es de mayor peso");
            }else{
                System.out.println("y es de menor peso");
            }

        } else{
                System.out.println("La ESFERA A es la diferente");
                if (PESOA>PESOB) {
                    System.out.println("y es de mayor peso");
                }else {
                    System.out.println("y es de menor peso");
                }
            }
        }
    }


