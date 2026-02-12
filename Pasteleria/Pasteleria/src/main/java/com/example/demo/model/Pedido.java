package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "PEDIDO")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PEDIDO")
    private Integer id;

    @Column(name = "FECHA_PEDIDO", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss") 
    private LocalDateTime fechaPedido;

    @Column(name = "FECHA_RECOGIDA", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime fechaRecogida;

    @Column(name = "ESTADO", length = 15, nullable = false)
    private String estado;

    @Column(name = "PRECIO_TOTAL", nullable = false)
    private Double precioTotal;

    @Column(name = "OBSERVACIONES", length = 250)
    private String observaciones;

    @ManyToOne
    @JoinColumn(name = "CLIENTE_ID_CLIENTE", nullable = false)
    private Cliente cliente;

    public Pedido() {
        this.fechaPedido = LocalDateTime.now();
    }

    public Integer getId() {
    	return id; 
    }
    public void setId(Integer id) {
    	this.id = id; 
    }

    public LocalDateTime getFechaPedido() {
    	return fechaPedido; 
    }
    public void setFechaPedido(LocalDateTime fechaPedido) {
    	this.fechaPedido = fechaPedido; 
    }

    public LocalDateTime getFechaRecogida() {
    	return fechaRecogida; 
    }
    public void setFechaRecogida(LocalDateTime fechaRecogida) {
    	this.fechaRecogida = fechaRecogida; 
    }

    public String getEstado() {
    	return estado; 
    }
    public void setEstado(String estado) {
    	this.estado = estado; 
    }

    public Double getPrecioTotal() {
    	return precioTotal; 
    }
    public void setPrecioTotal(Double precioTotal) {
    	this.precioTotal = precioTotal; 
    }

    public String getObservaciones() {
    	return observaciones; 
    }
    public void setObservaciones(String observaciones) {
    	this.observaciones = observaciones;
    }

    public Cliente getCliente() {
    	return cliente; 
    }
    public void setCliente(Cliente cliente) {
    	this.cliente = cliente; 
    }
}