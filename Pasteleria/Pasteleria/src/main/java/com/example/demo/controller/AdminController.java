package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

/* CONTROLADOR ADMIN */
@RestController
@RequestMapping("/api/admin/usuarios")
public class AdminController {

    /* INYECCIÓN DE SERVICIO */
    private final UsuarioService usuarioService;

    public AdminController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    /* LISTAR USUARIOS */
    @GetMapping
    public List<Usuario> listar() {
        return usuarioService.findAll();
    }

    /* CREAR USUARIO */
    @PostMapping
    public Usuario crear(@RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
    }

    /* ACTUALIZAR USUARIO */
    @PutMapping("/{id}")
    public Usuario actualizar(@PathVariable Integer id, @RequestBody Usuario usuario) {
        usuario.setId(id);
        return usuarioService.save(usuario);
    }

    /* ELIMINAR USUARIO */
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        usuarioService.deleteById(id);
    }
}
