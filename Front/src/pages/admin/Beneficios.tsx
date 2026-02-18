import React, { useEffect, useState, useContext } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

// Interfaz que define cómo es un registro de beneficio.
interface Beneficio {
    idBeneficios: number;
    fecha: string;
    ganancia: number;
}

// Componente principal de gestión de beneficios.
const Beneficios: React.FC = () => {

    // Obtengo el token del contexto para acceder a rutas protegidas.
    const { token } = useContext(AuthContext);

    // Estado donde guardo la lista de beneficios recibidos del backend.
    const [beneficios, setBeneficios] = useState<Beneficio[]>([]);

    // FUNCIÓN PARA CARGAR LOS DATOS DESDE EL BACKEND
    const cargarDatos = () => {
        fetch("/api/admin/beneficios", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => setBeneficios(data))
        .catch(err => console.error("Error cargando beneficios:", err));
    };

    // useEffect que carga los datos al montar el componente o cuando cambia el token.
    useEffect(() => {
        cargarDatos();
    }, [token]);

    // FUNCIÓN PARA ELIMINAR UN REGISTRO DE BENEFICIO
    const eliminar = async (id: number) => {
        if (!confirm("¿Eliminar este registro de ganancia?")) return;
<<<<<<< HEAD
        await fetch(`api/admin/beneficios/${id}`, {
=======

        await fetch(`http://localhost:8080/api/admin/beneficios/${id}`, {
>>>>>>> main
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        });

        // Recargo los datos después de eliminar.
        cargarDatos();
    };

    return (
        <AdminLayout>
            {/* Título principal */}
            <h2 className="mb-4">Gestión de Ganancias</h2>

            {/* Botón para crear un nuevo registro de ganancia */}
            <Link
                to="/admin/beneficios/crear"
                className="btn crear"
                style={{ marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}
            >
                + Registrar Ganancia Diaria
            </Link>

            {/* TABLA DE BENEFICIOS */}
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Ganancia Total</th>
                        <th style={{ textAlign: 'center' }}>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {beneficios.map((b) => (
                        <tr key={b.idBeneficios}>
                            {/* Fecha */}
                            <td className="py-3">{b.fecha}</td>

                            {/* Ganancia formateada */}
                            <td className="py-3 fw-bold" style={{ color: '#28a745' }}>
                                {b.ganancia.toFixed(2)} €
                            </td>

                            {/* Botón de eliminar */}
                            <td className="py-3" style={{ textAlign: 'center' }}>
                                <button
                                    onClick={() => eliminar(b.idBeneficios)}
                                    className="btn small danger"
                                    style={{ margin: '0 auto' }}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AdminLayout>
    );
};

export default Beneficios;
