package com.example.demo.controller;

import com.example.demo.model.Pedido;
import com.example.demo.model.PedidoProducto;
import com.example.demo.model.Usuario;
import com.example.demo.repository.PedidoProductoRepository;
import com.example.demo.repository.PedidoRepository;
import com.example.demo.service.UsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedidos")
@CrossOrigin(origins = "http://localhost:5173")
public class PedidoController {

    private final PedidoRepository pedidoRepo;
    private final PedidoProductoRepository itemRepo;
    private final UsuarioService usuarioService;

    public PedidoController(PedidoRepository pedidoRepo,
                            PedidoProductoRepository itemRepo,
                            UsuarioService usuarioService) {
        this.pedidoRepo = pedidoRepo;
        this.itemRepo = itemRepo;
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public List<Pedido> listarPedidos() {
        return pedidoRepo.findAll();
    }

    @PostMapping
    public Pedido crearPedido(@RequestBody Pedido pedido) {

        Usuario u = usuarioService.findById(pedido.getUsuario().getId());
        pedido.setUsuario(u);

        double total = pedido.getProductos().stream()
                .mapToDouble(p -> p.getPrecio() * p.getCantidad())
                .sum();
        pedido.setTotal(total);

        Pedido guardado = pedidoRepo.save(pedido);

        for (PedidoProducto item : pedido.getProductos()) {
            item.setPedido(guardado);
        }

        itemRepo.saveAll(pedido.getProductos());

        return guardado;
    }

    @PutMapping("/{id}/entregado")
    public Pedido marcarEntregado(@PathVariable Integer id) {
        Pedido p = pedidoRepo.findById(id).orElse(null);
        if (p == null) return null;

        p.setEstado("Entregado");
        return pedidoRepo.save(p);
    }

    @DeleteMapping("/{id}")
    public void eliminarPedido(@PathVariable Integer id) {
        itemRepo.deleteAll(itemRepo.findByPedidoId(id));
        pedidoRepo.deleteById(id);
    }
}
