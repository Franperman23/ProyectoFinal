package com.example.demo.serviceimpl;

import com.example.demo.model.Beneficio;
import com.example.demo.repository.BeneficioRepository;
import com.example.demo.service.BeneficioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BeneficioServiceImpl implements BeneficioService {

    @Autowired
    private BeneficioRepository beneficioRepository;

    @Override
    public List<Beneficio> listarTodos() {
        return beneficioRepository.findAll();
    }

    @Override
    public Beneficio guardar(Beneficio beneficio) {
        return beneficioRepository.save(beneficio);
    }

    @Override
    public void eliminar(Integer id) {
        beneficioRepository.deleteById(id);
    }
}