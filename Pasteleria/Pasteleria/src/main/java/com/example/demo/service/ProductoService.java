package com.example.demo.service;

import java.util.List;
import com.example.demo.dto.ProductoDTO;

public interface ProductoService {

    List<ProductoDTO> listarProductos();

    ProductoDTO guardarProducto(ProductoDTO productoDTO);

    void eliminarProducto(Integer id);
}
