package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "REGISTRO")
public class Registro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_REGISTRO")
    private Integer id;

    @Column(name = "FECHA", nullable = false)
    private LocalDate fecha;

    @Column(name = "HORA_ENTRADA", nullable = false)
    private LocalTime horaEntrada;

    @Column(name = "HORA_SALIDA", nullable = true)
    private LocalTime horaSalida;

    @Column(name = "HORAS_TRABAJADAS", precision = 4, scale = 2, nullable = true)
    private BigDecimal horasTrabajadas;

    @ManyToOne
    @JoinColumn(name = "EMPLEADO_ID_EMPLEADO", nullable = false)
    private Empleado empleado;

    public Registro() {}

    
    public Integer getId() {
    	return id; 
    }
    public void setId(Integer id) {
    	this.id = id; 
    }

    public LocalDate getFecha() {
    	return fecha; 
    }
    public void setFecha(LocalDate fecha) {
    	this.fecha = fecha; 
    }

    public LocalTime getHoraEntrada() {
    	return horaEntrada; 
    }
    public void setHoraEntrada(LocalTime horaEntrada) {
    	this.horaEntrada = horaEntrada; 
    }

    public LocalTime getHoraSalida() {
    	return horaSalida; 
    }
    public void setHoraSalida(LocalTime horaSalida) {
    	this.horaSalida = horaSalida; 
    }

    public BigDecimal getHorasTrabajadas() {
    	return horasTrabajadas; 
    }
    public void setHorasTrabajadas(BigDecimal horasTrabajadas) {
    	this.horasTrabajadas = horasTrabajadas; 
    }

    public Empleado getEmpleado() {
    	return empleado; 
    }
    public void setEmpleado(Empleado empleado) {
    	this.empleado = empleado; 
    }
}