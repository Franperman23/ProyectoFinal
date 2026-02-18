package com.example.demo;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/* Clase principal que inicia la aplicación Spring Boot */
@SpringBootApplication
public class PasteleriaApplication {

    public static void main(String[] args) {
        SpringApplication.run(PasteleriaApplication.class, args);
    }

    /* Crea un usuario ADMIN por defecto si no existe */
    @Bean
    CommandLineRunner initAdmin(UsuarioRepository usuarioRepo) {
        return args -> {

            Usuario adminExistente = usuarioRepo.findByEmail("admin");

            if (adminExistente == null) {
                Usuario admin = new Usuario();
                admin.setNombre("Administrador");
                admin.setEmail("admin");
                admin.setPassword("admin");
                admin.setRol("ADMIN");

                usuarioRepo.save(admin);
                System.out.println("✔ Usuario ADMIN creado");
            }
        };
    }
}
