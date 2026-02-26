package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.ProductoDTO;
import com.example.demo.service.ProductoService;

/* CONTROLADOR DE PRODUCTOS */
@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    /* INYECCIÓN DE SERVICIO */
    @Autowired
    private ProductoService productoService;

    /* LISTAR PRODUCTOS */
    @GetMapping
    public List<ProductoDTO> listar() {
        return productoService.listarProductos();
    }

    /* OBTENER PRODUCTO POR ID */
    @GetMapping("/{id}")
    public ProductoDTO obtener(@PathVariable Integer id) {
        return productoService.listarProductos()
                .stream()
                .filter(p -> p.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    /* CREAR PRODUCTO */
    @PostMapping
    public ProductoDTO guardar(@RequestBody ProductoDTO productoDTO) {
        return productoService.guardarProducto(productoDTO);
    }

    /* ACTUALIZAR PRODUCTO */
    @PutMapping("/{id}")
    public ProductoDTO actualizar(@PathVariable Integer id, @RequestBody ProductoDTO productoDTO) {
        productoDTO.setId(id);
        return productoService.guardarProducto(productoDTO);
    }

    /* ELIMINAR PRODUCTO */
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        productoService.eliminarProducto(id);
    }
}
