package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Cliente;
import com.example.demo.service.ClienteService;

/* CONTROLADOR DE CLIENTES */
@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    /* INYECCIÓN DE SERVICIO */
    @Autowired
    private ClienteService clienteService;

    /* LISTAR CLIENTES */
    @GetMapping
    public List<Cliente> listar() {
        return clienteService.listarClientes();
    }

    /* GUARDAR CLIENTE */
    @PostMapping
    public Cliente guardar(@RequestBody Cliente cliente) {
        return clienteService.guardarCliente(cliente);
    }
}
