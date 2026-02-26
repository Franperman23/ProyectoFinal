package com.example.demo.service;

import java.util.List;
import com.example.demo.model.Cliente;

public interface ClienteService {

    List<Cliente> listarClientes();

    Cliente guardarCliente(Cliente cliente);

    Cliente buscarPorEmail(String email);
}
