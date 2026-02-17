package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "BENEFICIOS")
public class Beneficio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_BENEFICIOS")
    private Integer idBeneficios;

    @Column(name = "FECHA", nullable = false)
    private LocalDate fecha;

    @Column(name = "GANANCIA", nullable = false, precision = 10, scale = 2)
    private BigDecimal ganancia;

    public Beneficio() {}

    public Integer getIdBeneficios() { return idBeneficios; }
    public void setIdBeneficios(Integer idBeneficios) { this.idBeneficios = idBeneficios; }
    public LocalDate getFecha() { return fecha; }
    public void setFecha(LocalDate fecha) { this.fecha = fecha; }
    public BigDecimal getGanancia() { return ganancia; }
    public void setGanancia(BigDecimal ganancia) { this.ganancia = ganancia; }
}