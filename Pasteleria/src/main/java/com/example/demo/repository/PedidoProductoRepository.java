package com.example.demo.repository;

import com.example.demo.model.PedidoProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PedidoProductoRepository extends JpaRepository<PedidoProducto, Integer> {
    List<PedidoProducto> findByPedidoId(Integer pedidoId);
}
