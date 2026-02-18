package com.example.demo.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ProductoDTO;
import com.example.demo.model.Producto;
import com.example.demo.repository.ProductoRepository;
import com.example.demo.service.ProductoService;

/* Servicio que gestiona las operaciones relacionadas con productos */
@Service
public class ProductoServiceImpl implements ProductoService {

    /* Repositorio para acceder a la tabla PRODUCTO */
    @Autowired
    private ProductoRepository productoRepository;

    /* Convierte una entidad Producto a un DTO */
    private ProductoDTO convertirADTO(Producto producto) {
        ProductoDTO dto = new ProductoDTO();
        dto.setId(producto.getId());
        dto.setNombre(producto.getNombre());
        dto.setDescripcion(producto.getDescripcion());
        dto.setPrecio(producto.getPrecio());
        dto.setStock(producto.getStock());
        dto.setReceta(producto.getReceta());
        dto.setTipo(producto.getTipoProducto());
        dto.setImagen(producto.getImagen());
        return dto;
    }

    /* Convierte un DTO a una entidad Producto */
    private Producto convertirAEntity(ProductoDTO dto) {
        Producto producto = new Producto();
        producto.setId(dto.getId());
        producto.setNombre(dto.getNombre());
        producto.setDescripcion(dto.getDescripcion());
        producto.setPrecio(dto.getPrecio());
        producto.setStock(dto.getStock());
        producto.setReceta(dto.getReceta());
        producto.setTipoProducto(dto.getTipo());
        producto.setImagen(dto.getImagen());
        return producto;
    }

    /* Devuelve todos los productos convertidos a DTO */
    @Override
    public List<ProductoDTO> listarProductos() {
        return productoRepository.findAll()
                .stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /* Guarda un producto y devuelve su DTO */
    @Override
    public ProductoDTO guardarProducto(ProductoDTO productoDTO) {
        Producto producto = convertirAEntity(productoDTO);
        Producto guardado = productoRepository.save(producto);
        return convertirADTO(guardado);
    }

    /* Elimina un producto por su ID */
    @Override
    public void eliminarProducto(Integer id) {
        productoRepository.deleteById(id);
    }
}
