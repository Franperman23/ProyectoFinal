package test.java.com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

@SpringBootTest
@AutoConfigureMockMvc // Necesario para simular las peticiones HTTP
class ProductoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void verificarRespuestaControlador() throws Exception {
        // 1. Simulamos una petición GET a la URL de tu controlador (ejemplo: /productos/1)
        MvcResult resultado = mockMvc.perform(get("/productos/1"))
                .andReturn();

        // 2. Obtenemos el código de estado (200, 404, etc.)
        int status = resultado.getResponse().getStatus();

        // 3. El assertEquals que quiere tu profesor
        // Verificamos que el código sea 200 (OK)
        assertEquals(200, status, "El controlador no respondió con un código 200 OK");
    }
}