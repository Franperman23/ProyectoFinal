import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

interface Registro {
    id: number;
    fecha: string;
    horaEntrada: string;
    horaSalida: string | null;
    horasTrabajadas: number | null;
    usuario: {
        nombre: string;
        email: string;
    };
}

const RegistroHorarioGlobal: React.FC = () => {
    const { token } = useContext(AuthContext);
    const [registros, setRegistros] = useState<Registro[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/registros", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => {
            if (!res.ok) throw new Error("Error al cargar registros");
            return res.json();
        })
        .then(data => setRegistros(data))
        .catch(err => setError(err.message));
    }, [token]);

    return (
        <div className="registro-container">
            <h2>Historial de Jornada Laboral</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <table className="tabla">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th style={{ textAlign: 'center' }}>Fecha</th>
                        <th style={{ textAlign: 'center' }}>Entrada</th>
                        <th style={{ textAlign: 'center' }}>Salida</th>
                        <th style={{ textAlign: 'right' }}>Total Horas</th>
                    </tr>
                </thead>

                <tbody>
                    {registros.map((reg) => (
                        <tr key={reg.id}>
                            <td>{reg.usuario.nombre}</td>
                            <td>{reg.usuario.email}</td>
                            <td style={{ textAlign: 'center' }}>{reg.fecha}</td>
                            <td style={{ textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>
                                {reg.horaEntrada.substring(0, 5)}
                            </td>
                            <td style={{ textAlign: 'center', color: '#dc3545', fontWeight: 'bold' }}>
                                {reg.horaSalida ? reg.horaSalida.substring(0, 5) : '-'}
                            </td>
                            <td style={{ textAlign: 'right' }}>
                                {reg.horaSalida ? (
                                    <span className="btn small" style={{ cursor: 'default', opacity: 1 }}>
                                        {reg.horasTrabajadas && reg.horasTrabajadas > 0 
                                            ? `${reg.horasTrabajadas} h` 
                                            : '0 h'}
                                    </span>
                                ) : (
                                    <span className="btn small" style={{ backgroundColor: '#ffc107', color: '#000', border: 'none' }}>
                                        En curso
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RegistroHorarioGlobal;