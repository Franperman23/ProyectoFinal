package com.example.demo.service;

import java.util.List;
import com.example.demo.model.Producto;

public interface ProductoService {

    List<Producto> listarProductos();

    Producto guardarProducto(Producto producto);

    void eliminarProducto(Long id);
}
