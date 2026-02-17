package com.example.demo.dto;

public class IngredienteDTO {
    private String nombre;
    private Integer cantidad;
    private String proveedor;

    // 1. Constructor vacío (Obligatorio para que Spring/Jackson lo use internamente)
    public IngredienteDTO() {
    }

    // 2. Constructor relleno (Muy útil para crear objetos rápidamente en el código)
    public IngredienteDTO(String nombre, Integer cantidad, String proveedor) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.proveedor = proveedor;
    }

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

    public String getProveedor() {
        return proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }
}