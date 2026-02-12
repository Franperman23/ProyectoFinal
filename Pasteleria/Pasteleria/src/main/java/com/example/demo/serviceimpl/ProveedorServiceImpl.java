package com.example.demo.serviceimpl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.model.Proveedor;
import com.example.demo.repository.ProveedorRepository;
import com.example.demo.service.ProveedorService;

@Service
public class ProveedorServiceImpl implements ProveedorService {

    private final ProveedorRepository proveedorRepository;

    public ProveedorServiceImpl(ProveedorRepository proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }

    @Override
    public Proveedor guardarProveedor(Proveedor proveedor) {
        return proveedorRepository.save(proveedor);
    }

    @Override
    public List<Proveedor> listarProveedores() {
        return proveedorRepository.findAll();
    }

    @Override
    public Proveedor obtenerProveedorPorId(Integer id) { 
        return proveedorRepository.findById(id).orElse(null);
    }

    @Override
    public Proveedor actualizarProveedor(Integer id, Proveedor proveedor) { 
        Proveedor proveedorExistente = proveedorRepository.findById(id).orElse(null);

        if (proveedorExistente != null) {
            proveedorExistente.setNombre(proveedor.getNombre());
            proveedorExistente.setEmail(proveedor.getEmail());
            proveedorExistente.setTelefono(proveedor.getTelefono());
            proveedorExistente.setDireccion(proveedor.getDireccion());
            return proveedorRepository.save(proveedorExistente);
        }

        return null;
    }

    @Override
    public void eliminarProveedor(Integer id) { 
        proveedorRepository.deleteById(id);
    }
}