package com.example.demo.serviceimpl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.model.Ingrediente;
import com.example.demo.dto.IngredienteDTO; 
import com.example.demo.repository.IngredienteRepository;
import com.example.demo.service.IngredienteService;

@Service
public class IngredienteServiceImpl implements IngredienteService {

    private final IngredienteRepository ingredienteRepository;

    public IngredienteServiceImpl(IngredienteRepository ingredienteRepository) {
        this.ingredienteRepository = ingredienteRepository;
    }

    @Override
    public Ingrediente guardarIngrediente(IngredienteDTO dto) {
        Ingrediente ingrediente = new Ingrediente();
        ingrediente.setNombre(dto.getNombre());
        ingrediente.setCantidad(dto.getCantidad());
        // Nos aseguramos de que siempre haya un valor para evitar el error de MySQL
        ingrediente.setProveedor(dto.getProveedor() != null ? dto.getProveedor() : "Pendiente");
        return ingredienteRepository.save(ingrediente);
    }

    @Override
    public List<Ingrediente> listarIngredientes() {
        return ingredienteRepository.findAll();
    }

    @Override
    public Ingrediente obtenerIngredientePorId(Integer id) {
        return ingredienteRepository.findById(id).orElse(null);
    }

    @Override
    public Ingrediente actualizarIngrediente(Integer id, Ingrediente ingrediente) {
        return ingredienteRepository.findById(id).map(existente -> {
            existente.setNombre(ingrediente.getNombre());
            existente.setCantidad(ingrediente.getCantidad());
            existente.setProveedor(ingrediente.getProveedor());
            return ingredienteRepository.save(existente);
        }).orElse(null);
    }

    @Override
    public void eliminarIngrediente(Integer id) {
        ingredienteRepository.deleteById(id);
    }
}