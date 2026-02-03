package com.example.demo.service;

import com.example.demo.model.Empleado;
import java.util.List;

public interface EmpleadoService {

    List<Empleado> findAll();

    Empleado findById(Long id);

    Empleado save(Empleado empleado);

    void deleteById(Long id);
}
