/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Inicio;

import java.io.Serializable;

/**
 *
 * @author David
 */
public class Contacto {
    
    private int cedula;
    private String nombre;
    private double edad;
    private Object telefono;

    public Contacto(){}
    
    public Contacto(int cedula, String nombre, double edad, Object telefono){
        this.cedula = cedula;
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    /**
     * @return the cedula
     */
    public int getCedula() {
        return cedula;
    }

    /**
     * @param cedula the cedula to set
     */
    public void setCedula(int cedula) {
        this.cedula = cedula;
    }

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return the edad
     */
    public double getEdad() {
        return edad;
    }

    /**
     * @param edad the edad to set
     */
    public void setEdad(double edad) {
        this.edad = edad;
    }

    /**
     * @return the telefono
     */
    public Object getTelefono() {
        return telefono;
    }

    /**
     * @param telefono the telefono to set
     */
    public void setTelefono(Object telefono) {
        this.telefono = telefono;
    }
    
}
