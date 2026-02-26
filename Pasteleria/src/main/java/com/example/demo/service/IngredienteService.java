package com.example.demo.service;

import java.util.List;
import com.example.demo.model.Ingrediente;
import com.example.demo.dto.IngredienteDTO; 

public interface IngredienteService {

    Ingrediente guardarIngrediente(IngredienteDTO ingredienteDTO);

    List<Ingrediente> listarIngredientes();

    Ingrediente obtenerIngredientePorId(Integer id);

    Ingrediente actualizarIngrediente(Integer id, Ingrediente ingrediente);

    void eliminarIngrediente(Integer id);
}