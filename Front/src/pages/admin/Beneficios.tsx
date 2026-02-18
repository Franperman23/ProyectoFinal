import React, { useEffect, useState, useContext } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

interface Beneficio {
    idBeneficios: number;
    fecha: string;
    ganancia: number;
}

const Beneficios: React.FC = () => {
    const { token } = useContext(AuthContext);
    const [beneficios, setBeneficios] = useState<Beneficio[]>([]);

    const cargarDatos = () => {
        fetch("/api/admin/beneficios", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => setBeneficios(data))
        .catch(err => console.error("Error cargando beneficios:", err));
    };

    useEffect(() => {
        cargarDatos();
    }, [token]);

    const eliminar = async (id: number) => {
        if (!confirm("¿Eliminar este registro de ganancia?")) return;
        await fetch(`api/admin/beneficios/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        });
        cargarDatos();
    };

    return (
        <AdminLayout>
            <h2 className="mb-4">Gestión de Ganancias</h2>

            <Link to="/admin/beneficios/crear" className="btn crear" style={{ marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>
                + Registrar Ganancia Diaria
            </Link>

        <table className="tabla">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Ganancia Total</th>
                        {/* Quitamos el 'right' y lo dejamos centrado o normal para que coincida */}
                        <th style={{ textAlign: 'center' }}>Acciones</th> 
                    </tr>
                </thead>
                <tbody>
                    {beneficios.map((b) => (
                        <tr key={b.idBeneficios}>
                            <td className="py-3">{b.fecha}</td>
                            <td className="py-3 fw-bold" style={{ color: '#28a745' }}>
                                {b.ganancia.toFixed(2)} €
                            </td>
                            {/* Alineamos la celda igual que la cabecera */}
                            <td className="py-3" style={{ textAlign: 'center' }}>
                                <button 
                                    onClick={() => eliminar(b.idBeneficios)} 
                                    className="btn small danger"
                                    style={{ margin: '0 auto' }} // Asegura que el botón no tenga márgenes raros
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