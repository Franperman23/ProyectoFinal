package com.example.demo.service;

import java.util.List;
import com.example.demo.model.Proveedor;

public interface ProveedorService {

    Proveedor guardarProveedor(Proveedor proveedor);

    List<Proveedor> listarProveedores();

    Proveedor obtenerProveedorPorId(Integer id); 

    Proveedor actualizarProveedor(Integer id, Proveedor proveedor); 

    void eliminarProveedor(Integer id); 
}