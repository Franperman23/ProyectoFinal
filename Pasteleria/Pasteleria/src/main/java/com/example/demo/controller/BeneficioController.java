package com.example.demo.controller;

import com.example.demo.model.Beneficio;
import com.example.demo.service.BeneficioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/beneficios")
@CrossOrigin(origins = "http://localhost:5173")
public class BeneficioController {

    @Autowired
    private BeneficioService beneficioService;

    @GetMapping
    public List<Beneficio> obtenerTodos() {
        return beneficioService.listarTodos();
    }

    @PostMapping
    public ResponseEntity<Beneficio> crearBeneficio(@RequestBody Beneficio beneficio) {
        return ResponseEntity.ok(beneficioService.guardar(beneficio));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarBeneficio(@PathVariable Integer id) {
        beneficioService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}