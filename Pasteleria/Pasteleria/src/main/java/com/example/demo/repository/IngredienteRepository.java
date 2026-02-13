package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Ingrediente;
import org.springframework.stereotype.Repository;

@Repository

public interface IngredienteRepository extends JpaRepository<Ingrediente, Integer> {
}