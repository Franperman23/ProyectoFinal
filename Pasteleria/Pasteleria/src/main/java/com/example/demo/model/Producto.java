package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "PRODUCTO")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PRODUCTO")
    private Integer id;

    @Column(name = "NOMBRE", nullable = false, length = 60)
    private String nombre;

    @Column(name = "DESCRIPCION", nullable = false, length = 250)
    private String descripcion;

    @Column(name = "PRECIO", nullable = false)
    private Double precio;

    @Column(name = "RECETA", nullable = false, length = 200)
    private String receta;
    
    @Column(name = "TIPO_PRODUCTO", nullable = false, length = 200)
    private String tipo_producto;
    
    @Column(name = "STOCK", nullable = false)
    private Integer stock;

    public Producto() {
    }

    public Integer getId() {
    	return id; 
    }
    public void setId(Integer id) {
    	this.id = id; 
    }

    public String getNombre() {
    	return nombre; 
    }
    public void setNombre(String nombre) {
    	this.nombre = nombre;
    }

    public String getDescripcion() {
    	return descripcion; 
    }
    public void setDescripcion(String descripcion) {
    	this.descripcion = descripcion; 
    }

    public Double getPrecio() {
    	return precio; 
    }
    public void setPrecio(Double precio) {
    	this.precio = precio; 
    }

    public String getReceta() {
    	return receta; 
    }
    public void setReceta(String receta) {
    	this.receta = receta; 
    }

	public String getTipo_producto() {
		return tipo_producto;
	}

	public void setTipo_producto(String tipo_producto) {
		this.tipo_producto = tipo_producto;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}
}