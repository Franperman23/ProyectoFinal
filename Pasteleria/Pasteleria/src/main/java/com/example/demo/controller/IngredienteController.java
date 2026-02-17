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

@RestController
@RequestMapping("/api/ingredientes")
public class IngredienteController {

    private final IngredienteService ingredienteService;

    public IngredienteController(IngredienteService ingredienteService) {
        this.ingredienteService = ingredienteService;
    }

    @PostMapping
    public Ingrediente crear(@RequestBody IngredienteDTO dto) {
        return ingredienteService.guardarIngrediente(dto);
    }

    @GetMapping
    public List<Ingrediente> listar() {
        return ingredienteService.listarIngredientes();
    }

    @GetMapping("/{id}")
    public Ingrediente obtener(@PathVariable Integer id) {
        return ingredienteService.obtenerIngredientePorId(id);
    }

    @PutMapping("/{id}")
    public Ingrediente actualizar(@PathVariable Integer id, @RequestBody Ingrediente ingrediente) {
        return ingredienteService.actualizarIngrediente(id, ingrediente);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        ingredienteService.eliminarIngrediente(id);
    }
}