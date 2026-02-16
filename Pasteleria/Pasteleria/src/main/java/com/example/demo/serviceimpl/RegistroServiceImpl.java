package com.example.demo.serviceimpl;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import com.example.demo.model.Registro;
import com.example.demo.repository.RegistroRepository;
import com.example.demo.service.RegistroService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class RegistroServiceImpl implements RegistroService {

    private final RegistroRepository registroRepo;
    private final UsuarioRepository usuarioRepo;

    public RegistroServiceImpl(RegistroRepository registroRepo, UsuarioRepository usuarioRepo) {
        this.registroRepo = registroRepo;
        this.usuarioRepo = usuarioRepo;
    }

    @Override
    public Registro ficharEntrada(Integer usuarioId) {

        Usuario usuario = usuarioRepo.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Registro registro = new Registro();
        registro.setUsuario(usuario);
        registro.setFecha(LocalDate.now());
        registro.setHoraEntrada(LocalTime.now());

        return registroRepo.save(registro);
    }

    @Override
    public Registro ficharSalida(Integer registroId) {

        Registro registro = registroRepo.findById(registroId)
                .orElseThrow(() -> new RuntimeException("Registro no encontrado"));

        LocalTime salida = LocalTime.now();
        registro.setHoraSalida(salida);

        if (registro.getHoraEntrada() != null) {
            Duration duracion = Duration.between(registro.getHoraEntrada(), salida);
            double horas = duracion.toMinutes() / 60.0;
            registro.setHorasTrabajadas(BigDecimal.valueOf(horas).setScale(2, RoundingMode.HALF_UP));
        }

        return registroRepo.save(registro);
    }

    @Override
    public List<Registro> obtenerRegistrosPorEmpleado(Integer usuarioId) {
        return registroRepo.findByUsuarioId(usuarioId);
    }

    @Override
    public List<Registro> obtenerTodos() {
        return registroRepo.findAll();
    }
}
