package com.example.demo.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cliente;
import com.example.demo.repository.ClienteRepository;
import com.example.demo.service.ClienteService;

/* Servicio que gestiona operaciones relacionadas con clientes */
@Service
public class ClienteServiceImpl implements ClienteService {

    /* Repositorio para acceder a la tabla CLIENTE */
    @Autowired
    private ClienteRepository clienteRepository;

    /* Devuelve todos los clientes registrados */
    @Override
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    /* Guarda o actualiza un cliente */
    @Override
    public Cliente guardarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    /* Busca un cliente por su email */
    @Override
    public Cliente buscarPorEmail(String email) {
        return clienteRepository.findByEmail(email);
    }
}
