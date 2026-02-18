package com.example.demo.controller;

import com.example.demo.model.Pedido;
import com.example.demo.model.PedidoProducto;
import com.example.demo.model.Usuario;
import com.example.demo.repository.PedidoProductoRepository;
import com.example.demo.repository.PedidoRepository;
import com.example.demo.service.UsuarioService;
import com.example.demo.service.PdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

    private final PedidoRepository pedidoRepo;
    private final PedidoProductoRepository itemRepo;
    private final UsuarioService usuarioService;

    @Autowired
    private PdfService pdfService;

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

    // 👉 Endpoint para crear pedido y devolver el PDF
    @PostMapping("/pdf")
    public ResponseEntity<byte[]> crearPedidoYDevolverPdf(@RequestBody Pedido pedido) {

        System.out.println("🔥 ENTRANDO EN crearPedidoYDevolverPdf()");
        System.out.println("📝 [PEDIDO] Recibido nuevo pedido del usuario ID: " + pedido.getUsuario().getId());

        // Cargar usuario real desde BD
        Usuario u = usuarioService.findById(pedido.getUsuario().getId());
        pedido.setUsuario(u);

        // Calcular total por seguridad en backend
        double total = pedido.getProductos().stream()
                .mapToDouble(p -> p.getPrecio() * p.getCantidad())
                .sum();
        pedido.setTotal(total);

        // Guardar pedido
        Pedido guardado = pedidoRepo.save(pedido);
        System.out.println("💾 [PEDIDO] Pedido guardado con ID: " + guardado.getId());

        // Asociar productos al pedido
        for (PedidoProducto item : pedido.getProductos()) {
            item.setPedido(guardado);
        }

        itemRepo.saveAll(pedido.getProductos());
        System.out.println("📦 [PEDIDO] Productos guardados: " + pedido.getProductos().size());

        try {
            System.out.println("📄 [PDF] Generando PDF para el pedido ID: " + guardado.getId());
            byte[] pdf = pdfService.generarPdfPedido(guardado);
            System.out.println("✅ [PDF] PDF generado correctamente para el pedido ID: " + guardado.getId());

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData(
                    "attachment",
                    "pedido_" + guardado.getId() + ".pdf"
            );

            return new ResponseEntity<>(pdf, headers, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println("❌ [ERROR] Fallo generando PDF: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
