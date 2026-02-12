package com.example.demo.dto;

public class IngredienteDTO {
    private String nombre;
    private Integer cantidad;
    private Integer proveedorId; 

    // Getters y Setters
    public String getNombre() {
    	return nombre; 
    }
    public void setNombre(String nombre) {
    	this.nombre = nombre; 
    }
    public Integer getCantidad() {
    	return cantidad; 
    }
    public void setCantidad(Integer cantidad) {
    	this.cantidad = cantidad; 
    }
    public Integer getProveedorId() {
    	return proveedorId; 
    }
    public void setProveedorId(Integer proveedorId) {
    	this.proveedorId = proveedorId; 
    }
}