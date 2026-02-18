package com.example.demo.serviceimpl;

import com.example.demo.model.Beneficio;
import com.example.demo.repository.BeneficioRepository;
import com.example.demo.service.BeneficioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/*
   Implementación del servicio de Beneficios.
   - Listar todos
   - Guardar uno nuevo
   - Eliminar por ID
*/
@Service
public class BeneficioServiceImpl implements BeneficioService {

    /* Inyección del repositorio que permite acceder a la tabla BENEFICIOS. */
    @Autowired
    private BeneficioRepository beneficioRepository;

    /* Devuelve todos los registros de beneficios almacenados. */
    @Override
    public List<Beneficio> listarTodos() {
        return beneficioRepository.findAll();
    }

    /* Guarda un beneficio en la base de datos.
       Si el beneficio ya existe, lo actualiza. */
    @Override
    public Beneficio guardar(Beneficio beneficio) {
        return beneficioRepository.save(beneficio);
    }

    /* Elimina un beneficio por su ID. */
    @Override
    public void eliminar(Integer id) {
        beneficioRepository.deleteById(id);
    }
}
