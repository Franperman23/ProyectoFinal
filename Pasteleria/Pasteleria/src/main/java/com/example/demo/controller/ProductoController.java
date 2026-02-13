package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.ProductoDTO;
import com.example.demo.service.ProductoService;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public List<ProductoDTO> listar() {
        return productoService.listarProductos();
    }

    @PostMapping
    public ProductoDTO guardar(@RequestBody ProductoDTO productoDTO) {
        return productoService.guardarProducto(productoDTO);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        productoService.eliminarProducto(id);
    }
}
