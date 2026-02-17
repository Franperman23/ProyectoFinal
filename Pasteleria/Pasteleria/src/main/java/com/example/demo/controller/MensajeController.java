package com.example.demo.controller;

import com.example.demo.model.Mensaje;
import com.example.demo.repository.MensajeRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/mensajes")
@CrossOrigin(origins = "http://localhost:5173")
public class MensajeController {

    private final MensajeRepository repo;

    public MensajeController(MensajeRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Mensaje crearMensaje(@RequestBody Mensaje m) {
        m.setFecha(LocalDate.now().toString());
        return repo.save(m);
    }

    @GetMapping
    public List<Mensaje> listarMensajes() {
        return repo.findAll();
    }

    @PutMapping("/{id}/leido")
    public Mensaje marcarLeido(@PathVariable Integer id) {
        Mensaje m = repo.findById(id).orElse(null);
        if (m == null) return null;
        m.setLeido(true);
        return repo.save(m);
    }

    @DeleteMapping("/{id}")
    public void eliminarMensaje(@PathVariable Integer id) {
        repo.deleteById(id);
    }
}
