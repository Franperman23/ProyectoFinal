package com.example.demo.service;

import com.example.demo.model.Registro;
import java.util.List;

public interface RegistroService {
    Registro ficharEntrada(Integer empleadoId);
    Registro ficharSalida(Integer registroId);
    List<Registro> obtenerRegistrosPorEmpleado(Integer empleadoId);
    List<Registro> obtenerTodos();
}