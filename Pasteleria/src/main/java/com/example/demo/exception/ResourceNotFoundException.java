package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/*
   Excepción personalizada para indicar que un recurso no existe.
   Cuando se lanza, Spring devuelve automáticamente un HTTP 404.
*/
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    /* 
       Constructor que recibe el mensaje del error.
       Este mensaje será devuelto al cliente en la respuesta.
    */
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
