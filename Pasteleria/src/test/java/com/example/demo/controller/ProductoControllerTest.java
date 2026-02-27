package com.example.demo.controller;

import com.example.demo.dto.ProductoDTO;
import com.example.demo.service.ProductoService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.*;

class ProductoControllerTest {

    @Test
    void testObtenerProducto() {
        // Simulamos el servicio
        ProductoService servicio = Mockito.mock(ProductoService.class);

        ProductoDTO p = new ProductoDTO();
        p.setId(1);
        p.setNombre("Tarta de queso");

        // Simulamos que listarProductos devuelve una lista con un producto
        Mockito.when(servicio.listarProductos())
                .thenReturn(java.util.List.of(p));

        // Creamos el controlador (sin constructor, usando setter por reflexión)
        ProductoController controller = new ProductoController();
        // Inyectamos el servicio simulado
        java.lang.reflect.Field field;
        try {
            field = ProductoController.class.getDeclaredField("productoService");
            field.setAccessible(true);
            field.set(controller, servicio);
        } catch (Exception e) {
            fail("No se pudo inyectar el servicio en el controlador");
        }

        // Llamamos al método real del controlador
        ProductoDTO resultado = controller.obtener(1);

        // Asserts
        assertNotNull(resultado);
        assertEquals("Tarta de queso", resultado.getNombre());
    }
}