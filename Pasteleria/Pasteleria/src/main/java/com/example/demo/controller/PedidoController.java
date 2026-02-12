package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.PedidoDTO;
import com.example.demo.model.Pedido;
import com.example.demo.service.PedidoService;

@RestController
@RequestMapping("/api/pedidos")

public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping
    public List<Pedido> listar() {
        return pedidoService.listarPedidos();
    }

    @GetMapping("/{id}")
    public Pedido obtenerPorId(@PathVariable Integer id) {
        return pedidoService.buscarPorId(id);
    }

    @PostMapping
    public Pedido guardar(@RequestBody PedidoDTO pedidoDTO) {
        return pedidoService.guardarPedido(pedidoDTO);
    }
}
