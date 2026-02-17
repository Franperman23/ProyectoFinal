package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviarPedidoConPdf(String emailDestino, byte[] pdf, String nombrePdf) throws Exception {

        System.out.println("📧 [EMAIL] Preparando envío a: " + emailDestino);

        MimeMessage mensaje = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mensaje, true);

        helper.setTo(emailDestino);
        helper.setSubject("Confirmación de tu pedido");
        helper.setText("Gracias por tu pedido. Te adjuntamos el resumen en PDF.");

        helper.addAttachment(nombrePdf, new ByteArrayResource(pdf));

        mailSender.send(mensaje);

        System.out.println("✅ [EMAIL] Email enviado correctamente a: " + emailDestino);
    }
}
