package com.example.demo.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PEDIDO")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String fecha;
    private String recoger;
    private Double total;

    private String estado = "Pendiente";

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id")
    @JsonIgnoreProperties({"password", "email"})
    private Usuario usuario;

    @OneToMany(mappedBy = "pedido", fetch = FetchType.EAGER)
    @JsonIgnoreProperties({"pedido"})
    private List<PedidoProducto> productos = new ArrayList<>();

    public Pedido() {}

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getFecha() { return fecha; }
    public void setFecha(String fecha) { this.fecha = fecha; }

    public String getRecoger() { return recoger; }
    public void setRecoger(String recoger) { this.recoger = recoger; }

    public Double getTotal() { return total; }
    public void setTotal(Double total) { this.total = total; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }

    public List<PedidoProducto> getProductos() { return productos; }
    public void setProductos(List<PedidoProducto> productos) { this.productos = productos; }
}
