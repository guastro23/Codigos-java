import java.util.Scanner;
    class ejercicio10{
    public static void main(String[] args) {
        
        Scanner input= new Scanner(System.in);
        
        System.out.println("Ingregrese la incripcion de estudiante");
        
        int inscripcion=input.nextInt();
        
        System.out.println("Ingregrese el nombre del estudiante");
        
        String nombre=input.next();
        
        System.out.println("Ingrese el patrimonio");
    
        int patrimonio=input.nextInt();
        
        System.out.println("Iingrese el estracto social");
        
        int estracto= input.nextInt();
        
        double  Pmatricula=(50000);

        
    
    if  (patrimonio > 2000000 &&  estracto>=3) {
        double pgodematricula;
         pgodematricula= Pmatricula+(0.03*patrimonio);
         System.out.print("El estudiante con el numero de inscripcion"+inscripcion + "y Nombre"+ nombre+"debe pagar"+pgodematricula);

     
     }

       
    else 
        {
            double pgodematricula;
         pgodematricula = Pmatricula - (0.03*patrimonio);
         System.out.print("El estudiante con el numero de inscripcion"+inscripcion+ "y Nombre"+ nombre+"debe pagar"+pgodematricula);

        }
       
  }

}