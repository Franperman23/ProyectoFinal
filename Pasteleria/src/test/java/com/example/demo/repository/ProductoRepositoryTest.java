package com.example.demo.repository;

import com.example.demo.model.Producto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class ProductoRepositoryTest {

    @Autowired
    private ProductoRepository productoRepository;

    @Test
    void testGuardarYRecuperarProducto() {
        Producto p = new Producto();
        p.setNombre("Tarta de queso");
        p.setDescripcion("Tarta casera de queso");
        p.setPrecio(15.0);
        p.setReceta("Queso, azúcar, huevos");
        p.setStock(10);
        p.setTipoProducto("Tarta");
        p.setImagen("imagen.jpg");

        Producto guardado = productoRepository.save(p);

        assertNotNull(guardado.getId());
        assertEquals("Tarta de queso", guardado.getNombre());
    }

    @Test
    void testListarProductos() {
        List<Producto> productos = productoRepository.findAll();
        assertNotNull(productos);
    }

    @Test
    void testEliminarProducto() {
        Producto p = new Producto();
        p.setNombre("Brownie");
        p.setDescripcion("Brownie de chocolate");
        p.setPrecio(3.5);
        p.setReceta("Chocolate, mantequilla, azúcar");
        p.setStock(20);
        p.setTipoProducto("Dulce");
        p.setImagen(null);

        Producto guardado = productoRepository.save(p);
        Integer id = guardado.getId();

        productoRepository.deleteById(id);

        assertFalse(productoRepository.findById(id).isPresent());
    }
}
