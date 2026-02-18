package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.ProductoDTO;
import com.example.demo.service.ProductoService;

/* CONTROLADOR DE REGISTROS */
package com.example.demo.controller;

import com.example.demo.model.Registro;
import com.example.demo.service.RegistroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/* CONTROLADOR DE REGISTRO DE ENTRADAS/SALIDAS */
@RestController
@RequestMapping("/api/registros")
public class RegistroController {

    /* INYECCIÓN DE SERVICIO */
    private final RegistroService registroService;

    public RegistroController(RegistroService registroService) {
        this.registroService = registroService;
    }

    /* FICHAR ENTRADA */
    @PostMapping("/entrada/{empleadoId}")
    public Registro ficharEntrada(@PathVariable Integer empleadoId) {
        return registroService.ficharEntrada(empleadoId);
    }

    /* FICHAR SALIDA */
    @PutMapping("/salida/{registroId}")
    public Registro ficharSalida(@PathVariable Integer registroId) {
        return registroService.ficharSalida(registroId);
    }

    /* REGISTROS POR EMPLEADO */
    @GetMapping("/empleado/{empleadoId}")
    public List<Registro> registrosPorEmpleado(@PathVariable Integer empleadoId) {
        return registroService.obtenerRegistrosPorEmpleado(empleadoId);
    }

    /* LISTAR TODOS LOS REGISTROS */
    @GetMapping
    public List<Registro> todos() {
        return registroService.obtenerTodos();
    }
}
