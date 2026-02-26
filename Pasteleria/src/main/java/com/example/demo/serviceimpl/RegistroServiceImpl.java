package com.example.demo.serviceimpl;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Registro;
import com.example.demo.model.Usuario;
import com.example.demo.repository.RegistroRepository;
import com.example.demo.repository.UsuarioRepository;
import com.example.demo.service.RegistroService;

/* Servicio que gestiona el fichaje de entrada y salida de empleados */
@Service
public class RegistroServiceImpl implements RegistroService {

    /* Repositorios para acceder a REGISTRO y USUARIO */
    private final RegistroRepository registroRepo;
    private final UsuarioRepository usuarioRepo;

    /* Inyección por constructor */
    public RegistroServiceImpl(RegistroRepository registroRepo, UsuarioRepository usuarioRepo) {
        this.registroRepo = registroRepo;
        this.usuarioRepo = usuarioRepo;
    }

    /* Registra la hora de entrada de un usuario */
    @Override
    public Registro ficharEntrada(Integer usuarioId) {

        Usuario usuario = usuarioRepo.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado")); // Verifica que el usuario exista

        List<Registro> hoy = registroRepo.findByUsuarioId(usuarioId); // Obtiene registros del usuario
        boolean yaFichado = hoy.stream().anyMatch(r -> r.getHoraSalida() == null); // Comprueba si ya tiene entrada activa
        if (yaFichado) throw new RuntimeException("Ya tienes una entrada activa"); // Evita duplicar fichajes

        Registro registro = new Registro();
        registro.setUsuario(usuario); // Asocia el registro al usuario
        registro.setFecha(LocalDate.now()); // Guarda la fecha actual
        registro.setHoraEntrada(LocalTime.now()); // Marca la hora de entrada
        registro.setHorasTrabajadas(BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP)); // Inicializa horas trabajadas en 0

        return registroRepo.save(registro); // Guarda el registro en la BD
    }

    /* Registra la hora de salida y calcula las horas trabajadas */
    @Override
    public Registro ficharSalida(Integer registroId) {

        Registro registro = registroRepo.findById(registroId)
                .orElseThrow(() -> new RuntimeException("Registro no encontrado")); // Verifica que el registro exista

        if (registro.getHoraSalida() != null)
            throw new RuntimeException("Este registro ya tiene una salida marcada"); // Evita marcar salida dos veces

        LocalTime salida = LocalTime.now();
        registro.setHoraSalida(salida); // Marca la hora de salida

        if (registro.getHoraEntrada() != null) {
            Duration duracion = Duration.between(registro.getHoraEntrada(), salida); // Calcula duración total
            double horasDecimas = duracion.toMinutes() / 60.0; // Convierte minutos a horas decimales
            registro.setHorasTrabajadas(new BigDecimal(horasDecimas).setScale(2, RoundingMode.HALF_UP)); // Redondea a 2 decimales
        }

        return registroRepo.save(registro); // Guarda el registro actualizado
    }

    /* Obtiene todos los registros de un empleado */
    @Override
    public List<Registro> obtenerRegistrosPorEmpleado(Integer usuarioId) {
        return registroRepo.findByUsuarioId(usuarioId);
    }

    /* Obtiene todos los registros ordenados por fecha descendente */
    @Override
    public List<Registro> obtenerTodos() {
        return registroRepo.findAllByOrderByFechaDesc();
    }
}
