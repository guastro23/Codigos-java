/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Inicio;

import java.io.Serializable;
import java.util.ArrayList;

/**
 *
 * @author David
 */
public class Construccion {
    
    private ArrayList<Object> a = new ArrayList<Object>();
    
    public Construccion(){}
    
    public Construccion(ArrayList<Object> a){
        this.a = a;
    }
    
    public void agregarRegistro(Contacto p){
        this.a.add(p);
    }

    public void modificarRegistro(int i, Contacto p){
        this.a.set(i, p);
    }
    
    public void eliminarRegistro(int i){
        this.a.remove(i);
    }
    
    public Contacto obtenerRegistro(int i){
        return (Contacto)a.get(i);
    }
    
    public int cantidadRegistro(){
        return this.a.size();
    }
    
    public int buscaCedula(int cedula){
        for(int i = 0; i < cantidadRegistro(); i++){
            if(cedula == obtenerRegistro(i).getCedula())return i;
        }
        return -1;
    }
    
}
