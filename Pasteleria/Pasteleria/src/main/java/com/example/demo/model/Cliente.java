package com.example.demo.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "`CLIENTE`")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CLIENTE")
    private Integer id; 

    @Column(name = "NOMBRE", nullable = false, length = 45)
    private String nombre;

    @Column(name = "APELLIDOS", nullable = false, length = 80)
    private String apellidos;

    @Column(name = "EMAIL", nullable = false, length = 100)
    private String email;

    @Column(name = "TELEFONO", nullable = false, length = 15)
    private String telefono;

    @Column(name = "CONTRASEÑA", nullable = false, length = 100)
    @JsonProperty("password") 
    private String password;

    public Cliente() {}

    public Integer getId() {
    	return id; 
    }
    public void setId(Integer id) {
    	this.id = id; 
    }

    public String getNombre() {
    	return nombre; 
    }
    public void setNombre(String nombre) {
    	this.nombre = nombre; 
    }

    public String getApellidos() {
    	return apellidos; 
    }
    public void setApellidos(String apellidos) {
    	this.apellidos = apellidos; 
    }

    public String getEmail() {
    	return email; 
    }
    public void setEmail(String email) {
    	this.email = email; 
    }

    public String getTelefono() {
    	return telefono; 
    }
    public void setTelefono(String telefono) {
    	this.telefono = telefono; 
    }

    public String getPassword() {
    	return password; 
    }
    public void setPassword(String password) {
    	this.password = password; 
    }
}