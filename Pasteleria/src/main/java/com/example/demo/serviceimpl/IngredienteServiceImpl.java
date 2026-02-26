package com.example.demo.serviceimpl;

import java.util.List;
import org.springframework.stereotype.Service;

import com.example.demo.model.Ingrediente;
import com.example.demo.dto.IngredienteDTO; 
import com.example.demo.repository.IngredienteRepository;
import com.example.demo.service.IngredienteService;

/* Servicio que gestiona las operaciones relacionadas con ingredientes */
@Service
public class IngredienteServiceImpl implements IngredienteService {

    /* Repositorio para acceder a la tabla INGREDIENTE */
    private final IngredienteRepository ingredienteRepository;

    /* Inyección por constructor del repositorio */
    public IngredienteServiceImpl(IngredienteRepository ingredienteRepository) {
        this.ingredienteRepository = ingredienteRepository;
    }

    /* Guarda un ingrediente a partir de un DTO */
    @Override
    public Ingrediente guardarIngrediente(IngredienteDTO dto) {
        Ingrediente ingrediente = new Ingrediente();
        ingrediente.setNombre(dto.getNombre());
        ingrediente.setCantidad(dto.getCantidad());
        ingrediente.setProveedor(dto.getProveedor() != null ? dto.getProveedor() : "Pendiente"); // Valor por defecto
        return ingredienteRepository.save(ingrediente);
    }

    /* Devuelve todos los ingredientes registrados */
    @Override
    public List<Ingrediente> listarIngredientes() {
        return ingredienteRepository.findAll();
    }

    /* Obtiene un ingrediente por su ID */
    @Override
    public Ingrediente obtenerIngredientePorId(Integer id) {
        return ingredienteRepository.findById(id).orElse(null);
    }

    /* Actualiza un ingrediente existente */
    @Override
    public Ingrediente actualizarIngrediente(Integer id, Ingrediente ingrediente) {
        return ingredienteRepository.findById(id).map(existente -> {
            existente.setNombre(ingrediente.getNombre());
            existente.setCantidad(ingrediente.getCantidad());
            existente.setProveedor(ingrediente.getProveedor());
            return ingredienteRepository.save(existente);
        }).orElse(null);
    }

    /* Elimina un ingrediente por su ID */
    @Override
    public void eliminarIngrediente(Integer id) {
        ingredienteRepository.deleteById(id);
    }
}
