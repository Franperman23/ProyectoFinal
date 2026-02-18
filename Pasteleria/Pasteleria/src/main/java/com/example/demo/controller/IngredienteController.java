package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.IngredienteDTO;
import com.example.demo.model.Ingrediente;
import com.example.demo.service.IngredienteService;

/* CONTROLADOR DE INGREDIENTES */
@RestController
@RequestMapping("/api/ingredientes")
public class IngredienteController {

    /* INYECCIÓN DE SERVICIO */
    private final IngredienteService ingredienteService;

    public IngredienteController(IngredienteService ingredienteService) {
        this.ingredienteService = ingredienteService;
    }

    /* CREAR INGREDIENTE */
    @PostMapping
    public Ingrediente crear(@RequestBody IngredienteDTO dto) {
        return ingredienteService.guardarIngrediente(dto);
    }

    /* LISTAR INGREDIENTES */
    @GetMapping
    public List<Ingrediente> listar() {
        return ingredienteService.listarIngredientes();
    }

    /* OBTENER INGREDIENTE POR ID */
    @GetMapping("/{id}")
    public Ingrediente obtener(@PathVariable Integer id) {
        return ingredienteService.obtenerIngredientePorId(id);
    }

    /* ACTUALIZAR INGREDIENTE */
    @PutMapping("/{id}")
    public Ingrediente actualizar(@PathVariable Integer id, @RequestBody Ingrediente ingrediente) {
        return ingredienteService.actualizarIngrediente(id, ingrediente);
    }

    /* ELIMINAR INGREDIENTE */
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        ingredienteService.eliminarIngrediente(id);
    }
}
