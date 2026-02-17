package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Registro;

@Repository
public interface RegistroRepository extends JpaRepository<Registro, Integer> {
    // Para el historial del empleado (Lo que ya usas)
    List<Registro> findByUsuarioId(Integer usuarioId);
    
    // Para el admin: Traer todos ordenados por fecha de más reciente a más antiguo
    List<Registro> findAllByOrderByFechaDesc();
}