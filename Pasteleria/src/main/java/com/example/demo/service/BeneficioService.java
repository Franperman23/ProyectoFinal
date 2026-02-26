package com.example.demo.service;

import com.example.demo.model.Beneficio;
import java.util.List;

public interface BeneficioService {
    List<Beneficio> listarTodos();
    Beneficio guardar(Beneficio beneficio);
    void eliminar(Integer id);
}