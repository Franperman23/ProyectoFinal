package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/* 
   Manejador global de excepciones.
   Permite capturar errores de toda la aplicación y devolver respuestas uniformes.
*/
@ControllerAdvice
public class GlobalExceptionHandler {

    /* 
       Maneja excepciones del tipo ResourceNotFoundException.
       Se usa cuando un recurso solicitado no existe.
    */
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> resourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {

        Map<String, Object> details = new HashMap<>();
        details.put("timestamp", new Date());                 // Momento del error
        details.put("estado", "ERROR");                       // Estado genérico
        details.put("mensaje", ex.getMessage());              // Mensaje de la excepción
        details.put("detalles", request.getDescription(false)); // Info adicional de la petición

        return new ResponseEntity<>(details, HttpStatus.NOT_FOUND);
    }

    /* 
       Maneja cualquier otra excepción no controlada.
       Evita que errores inesperados rompan la API y devuelve un mensaje genérico.
    */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> globalExceptionHandler(Exception ex, WebRequest request) {

        Map<String, Object> details = new HashMap<>();
        details.put("timestamp", new Date());                 // Momento del error
        details.put("mensaje", "Error interno en el servidor de la Pastelería");

        return new ResponseEntity<>(details, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
