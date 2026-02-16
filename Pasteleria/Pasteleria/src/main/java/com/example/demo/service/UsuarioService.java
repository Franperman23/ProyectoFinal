package com.example.demo.service;

import com.example.demo.model.Usuario;
import java.util.List;

public interface UsuarioService {

    Usuario save(Usuario usuario);

    Usuario findByEmail(String email);

    List<Usuario> findAll();

    Usuario findById(Integer id);

    void deleteById(Integer id);
}
