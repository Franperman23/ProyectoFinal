package com.example.demo.service;

import com.example.demo.model.Pedido;
import com.example.demo.model.PedidoProducto;

import com.lowagie.text.Document;
import com.lowagie.text.Element;
import com.lowagie.text.Font;
import com.lowagie.text.Image;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.Rectangle;

import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import org.springframework.stereotype.Service;

import java.awt.Color;
import java.io.ByteArrayOutputStream;

@Service
public class PdfService {

    public byte[] generarPdfPedido(Pedido pedido) throws Exception {

        System.out.println("📄 [PDF] Generando PDF para el pedido ID: " + pedido.getId());

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        Document document = new Document(PageSize.A4, 40, 40, 40, 40);
        PdfWriter.getInstance(document, baos);

        document.open();

        // LOGO
        try {
            Image logo = Image.getInstance("src/main/resources/static/img/logo.png");
            logo.scaleToFit(90, 90);
            logo.setAlignment(Image.ALIGN_CENTER);
            document.add(logo);
        } catch (Exception e) {
            System.out.println("⚠ No se pudo cargar el logo, continuando sin él.");
        }

        // TÍTULO
        Paragraph titulo = new Paragraph("RESUMEN DEL PEDIDO",
                new Font(Font.HELVETICA, 22, Font.BOLD, new Color(180, 50, 100)));
        titulo.setAlignment(Element.ALIGN_CENTER);
        titulo.setSpacingAfter(20);
        document.add(titulo);

        // INFO CLIENTE
        PdfPTable info = new PdfPTable(2);
        info.setWidthPercentage(100);
        info.setSpacingAfter(20);

        Font label = new Font(Font.HELVETICA, 12, Font.BOLD);
        Font value = new Font(Font.HELVETICA, 12);

        info.addCell(celda("Cliente:", label));
        info.addCell(celda(pedido.getUsuario().getNombre(), value));

        info.addCell(celda("Email:", label));
        info.addCell(celda(pedido.getUsuario().getEmail(), value));

        info.addCell(celda("Fecha del pedido:", label));
        info.addCell(celda(pedido.getFecha(), value));

        info.addCell(celda("Fecha de recogida:", label));
        info.addCell(celda(pedido.getRecoger(), value));

        info.addCell(celda("Total:", label));
        info.addCell(celda(pedido.getTotal() + " €", value));

        document.add(info);

        // TABLA PRODUCTOS
        PdfPTable tabla = new PdfPTable(new float[]{4, 1, 2});
        tabla.setWidthPercentage(100);
        tabla.setSpacingBefore(10);

        tabla.addCell(header("Producto"));
        tabla.addCell(header("Cant."));
        tabla.addCell(header("Precio"));

        for (PedidoProducto p : pedido.getProductos()) {
            tabla.addCell(celda(p.getNombre(), value));
            tabla.addCell(celda(String.valueOf(p.getCantidad()), value));
            tabla.addCell(celda(p.getPrecio() + " €", value));
        }

        document.add(tabla);

        // PIE DE PÁGINA
        Paragraph footer = new Paragraph(
                "Gracias por confiar en Pastelería Lama 💗",
                new Font(Font.HELVETICA, 12, Font.ITALIC, Color.GRAY)
        );
        footer.setAlignment(Element.ALIGN_CENTER);
        footer.setSpacingBefore(30);
        document.add(footer);

        document.close();

        System.out.println("✅ [PDF] PDF generado correctamente para el pedido ID: " + pedido.getId());

        return baos.toByteArray();
    }

    private PdfPCell celda(String texto, Font font) {
        PdfPCell cell = new PdfPCell(new Phrase(texto, font));
        cell.setBorder(Rectangle.NO_BORDER);
        cell.setPadding(5);
        return cell;
    }

    private PdfPCell header(String texto) {
        PdfPCell cell = new PdfPCell(new Phrase(texto,
                new Font(Font.HELVETICA, 12, Font.BOLD, Color.WHITE)));
        cell.setBackgroundColor(new Color(180, 50, 100));
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setPadding(8);
        return cell;
    }
}
