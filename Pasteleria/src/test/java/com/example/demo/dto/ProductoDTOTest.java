package com.example.demo.dto; 

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class ProductoDTOTest {

    @Test
    void testProductoDTO() {
        ProductoDTO producto = new ProductoDTO();
        
        String nombrePrueba = "Croissant de Chocolate";
        Double precioPrueba = 2.50;
        
        producto.setNombre(nombrePrueba);
        producto.setPrecio(precioPrueba);
        
        assertEquals(nombrePrueba, producto.getNombre());
        assertEquals(precioPrueba, producto.getPrecio());
    }
}
