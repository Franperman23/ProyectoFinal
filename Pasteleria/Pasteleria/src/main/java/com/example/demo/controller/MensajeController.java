package com.example.demo.controller;

import com.example.demo.model.Mensaje;
import com.example.demo.repository.MensajeRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

/* CONTROLADOR DE MENSAJES */
@RestController
@RequestMapping("/api/mensajes")
@CrossOrigin(origins = "http://localhost:5173")
public class MensajeController {

    /* INYECCIÓN DE REPOSITORIO */
    private final MensajeRepository repo;

    public MensajeController(MensajeRepository repo) {
        this.repo = repo;
    }

    /* CREAR MENSAJE */
    @PostMapping
    public Mensaje crearMensaje(@RequestBody Mensaje m) {
        m.setFecha(LocalDate.now().toString());
        return repo.save(m);
    }

    /* LISTAR MENSAJES */
    @GetMapping
    public List<Mensaje> listarMensajes() {
        return repo.findAll();
    }

    /* MARCAR COMO LEÍDO */
    @PutMapping("/{id}/leido")
    public Mensaje marcarLeido(@PathVariable Integer id) {
        Mensaje m = repo.findById(id).orElse(null);
        if (m == null) return null;
        m.setLeido(true);
        return repo.save(m);
    }

    /* ELIMINAR MENSAJE */
    @DeleteMapping("/{id}")
    public void eliminarMensaje(@PathVariable Integer id) {
        repo.deleteById(id);
    }
}
