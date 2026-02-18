package com.example.demo.controller;

import com.example.demo.model.Beneficio;
import com.example.demo.service.BeneficioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/* CONTROLADOR DE BENEFICIOS (ADMIN) */
@RestController
@RequestMapping("/api/admin/beneficios")
public class BeneficioController {

    /* INYECCIÓN DE SERVICIO */
    @Autowired
    private BeneficioService beneficioService;

    /* LISTAR BENEFICIOS */
    @GetMapping
    public List<Beneficio> obtenerTodos() {
        return beneficioService.listarTodos();
    }

    /* CREAR BENEFICIO */
    @PostMapping
    public ResponseEntity<Beneficio> crearBeneficio(@RequestBody Beneficio beneficio) {
        return ResponseEntity.ok(beneficioService.guardar(beneficio));
    }

    /* ELIMINAR BENEFICIO */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarBeneficio(@PathVariable Integer id) {
        beneficioService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
