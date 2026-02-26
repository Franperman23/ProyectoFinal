package com.example.demo.serviceimpl;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import com.example.demo.service.UsuarioService;
import org.springframework.stereotype.Service;

import java.util.List;

/* Servicio que gestiona operaciones relacionadas con usuarios */
@Service
public class UsuarioServiceImpl implements UsuarioService {

    /* Repositorio para acceder a la tabla USUARIO */
    private final UsuarioRepository repo;

    /* Inyección por constructor */
    public UsuarioServiceImpl(UsuarioRepository repo) {
        this.repo = repo;
    }

    /* Guarda o actualiza un usuario */
    @Override
    public Usuario save(Usuario usuario) {
        return repo.save(usuario);
    }

    /* Busca un usuario por su email */
    @Override
    public Usuario findByEmail(String email) {
        return repo.findByEmail(email);
    }

    /* Devuelve todos los usuarios */
    @Override
    public List<Usuario> findAll() {
        return repo.findAll();
    }

    /* Busca un usuario por su ID */
    @Override
    public Usuario findById(Integer id) {
        return repo.findById(id).orElse(null);
    }

    /* Elimina un usuario por su ID */
    @Override
    public void deleteById(Integer id) {
        repo.deleteById(id);
    }
}
