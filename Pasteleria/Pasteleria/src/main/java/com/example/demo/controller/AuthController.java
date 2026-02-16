package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UsuarioService usuarioService;

    public AuthController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // LOGIN
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {

        String email = body.get("email");
        String password = body.get("password");

        Usuario usuario = usuarioService.findByEmail(email);

        if (usuario == null || !usuario.getPassword().equals(password)) {
            throw new RuntimeException("Credenciales incorrectas");
        }

        // Respuesta exacta que espera el frontend para guardar el usuario en localStorage
        Map<String, Object> response = new HashMap<>();
        response.put("id", usuario.getId());
        response.put("nombre", usuario.getNombre());
        response.put("email", usuario.getEmail());
        response.put("rol", usuario.getRol());
        response.put("token", "FAKE_TOKEN"); 

        return response;
    }

    // REGISTRO (solo clientes)
    @PostMapping("/register")
    public Usuario register(@RequestBody Map<String, String> body) {

        Usuario nuevo = new Usuario();
        nuevo.setNombre(body.get("nombre"));
        nuevo.setEmail(body.get("email"));
        nuevo.setPassword(body.get("password"));
        nuevo.setRol("CLIENTE");

        return usuarioService.save(nuevo);
    }
}
