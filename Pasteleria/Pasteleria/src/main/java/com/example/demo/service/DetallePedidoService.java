package com.example.demo.service;

import com.example.demo.model.DetallePedido;
import java.util.List;

public interface DetallePedidoService {

    DetallePedido guardarDetalle(DetallePedido detalle);

    List<DetallePedido> listarDetalles();
}
