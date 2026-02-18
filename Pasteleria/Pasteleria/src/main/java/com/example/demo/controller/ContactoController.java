package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

/* CONTROLADOR DE CONTACTO */
@RestController
@RequestMapping("/api/contacto")
public class ContactoController {

    /* RECIBIR MENSAJE */
    @PostMapping
    public String recibirMensaje(@RequestBody ContactoRequest req) {

        System.out.println("📩 Nuevo mensaje de contacto:");
        System.out.println("Nombre: " + req.getNombre());
        System.out.println("Email: " + req.getEmail());
        System.out.println("Teléfono: " + req.getTelefono());
        System.out.println("Mensaje: " + req.getMensaje());

        return "Mensaje recibido correctamente";
    }
}

/* DTO DE CONTACTO */
class ContactoRequest {
    private String nombre;
    private String email;
    private String telefono;
    private String mensaje;

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }

    public String getMensaje() { return mensaje; }
    public void setMensaje(String mensaje) { this.mensaje = mensaje; }
}
