package com.example.demo.service;

import java.util.List;
import com.example.demo.model.Pedido;
import com.example.demo.dto.PedidoDTO;

public interface PedidoService {

    List<Pedido> listarPedidos();

    Pedido guardarPedido(PedidoDTO pedidodto);

    Pedido buscarPorId(Integer id); 
}
