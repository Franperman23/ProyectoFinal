package com.example.demo.dto;

import java.time.LocalDateTime;
import java.util.List;

public class PedidoDTO {

    private LocalDateTime fechaRecogida;
    private String estado;
    private String observaciones;
    private Integer clienteId;
    private List<DetallePedidoDTO> detalles;

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

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Integer getClienteId() {
        return clienteId;
    }

    public void setClienteId(Integer clienteId) {
        this.clienteId = clienteId;
    }

    public List<DetallePedidoDTO> getDetalles() {
        return detalles;
    }

    public void setDetalles(List<DetallePedidoDTO> detalles) {
        this.detalles = detalles;
    }
}
