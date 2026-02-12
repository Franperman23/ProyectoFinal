package com.example.demo.controller;

import com.example.demo.model.Registro;
import com.example.demo.service.RegistroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registros")

public class RegistroController {

    private final RegistroService registroService;

    public RegistroController(RegistroService registroService) {
        this.registroService = registroService;
    }

    @PostMapping("/entrada/{empleadoId}")
    public Registro ficharEntrada(@PathVariable Integer empleadoId) {
        return registroService.ficharEntrada(empleadoId);
    }

    @PutMapping("/salida/{registroId}")
    public Registro ficharSalida(@PathVariable Integer registroId) {
        return registroService.ficharSalida(registroId);
    }

    @GetMapping("/empleado/{empleadoId}")
    public List<Registro> registrosPorEmpleado(@PathVariable Integer empleadoId) {
        return registroService.obtenerRegistrosPorEmpleado(empleadoId);
    }

    @GetMapping
    public List<Registro> todos() {
        return registroService.obtenerTodos();
    }
}