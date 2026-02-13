package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "INGREDIENTE")
public class Ingrediente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_INGREDIENTE")
    private Integer idIngrediente; 

    @Column(name = "NOMBRE", nullable = false, length = 50)
    private String nombre;

    @Column(name = "CANTIDAD", nullable = false)
    private Integer cantidad;

    @ManyToOne
    @JoinColumn(
        name = "PROVEEDOR_ID_PROVEEDOR",
        nullable = false
    )
    private Proveedor proveedor;

    public Ingrediente() {
    }

    public Ingrediente(Integer idIngrediente, String nombre, Integer cantidad, Proveedor proveedor) {
        this.idIngrediente = idIngrediente;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.proveedor = proveedor;
    }

    public Integer getIdIngrediente() {
        return idIngrediente;
    }

    public void setIdIngrediente(Integer idIngrediente) {
        this.idIngrediente = idIngrediente;
    }

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

    public Proveedor getProveedor() {
        return proveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.proveedor = proveedor;
    }
}