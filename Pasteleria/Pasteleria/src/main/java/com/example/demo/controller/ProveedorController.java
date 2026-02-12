package com.example.demo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Proveedor;
import com.example.demo.service.ProveedorService;

@RestController
@RequestMapping("/api/proveedores")
public class ProveedorController {

    private final ProveedorService proveedorService;

    public ProveedorController(ProveedorService proveedorService) {
        this.proveedorService = proveedorService;
    }

    @PostMapping
    public Proveedor crearProveedor(@RequestBody Proveedor proveedor) {
        return proveedorService.guardarProveedor(proveedor);
    }

    @GetMapping
    public List<Proveedor> listarProveedores() {
        return proveedorService.listarProveedores();
    }

    @GetMapping("/{id}")
    public Proveedor obtenerProveedor(@PathVariable Integer id) { 
        return proveedorService.obtenerProveedorPorId(id);
    }

    @PutMapping("/{id}")
    public Proveedor actualizarProveedor(@PathVariable Integer id, @RequestBody Proveedor proveedor) { 
        return proveedorService.actualizarProveedor(id, proveedor);
    }

    @DeleteMapping("/{id}")
    public void eliminarProveedor(@PathVariable Integer id) { 
        proveedorService.eliminarProveedor(id);
    }
}