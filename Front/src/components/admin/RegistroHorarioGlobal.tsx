import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

// Define la interfaz Registro para tipar correctamente los datos que vienen del backend.
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

// Componente principal que muestra el historial global de registros horarios.
const RegistroHorarioGlobal: React.FC = () => {

    // Obtengo el token del contexto de autenticación.
    // Este token se envía en la cabecera Authorization para acceder a rutas protegidas.
    const { token } = useContext(AuthContext);

    // Estado donde guardo todos los registros recibidos del backend.
    const [registros, setRegistros] = useState<Registro[]>([]);

    // Estado para mostrar errores si la petición falla.
    const [error, setError] = useState<string | null>(null);

    // useEffect se ejecuta al montar el componente.
    // Aquí hago la petición al backend para obtener todos los registros horarios.
    useEffect(() => {
        fetch("/api/registros", {
            headers: {
                // Envío el token JWT en la cabecera Authorization.
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => {
            if (!res.ok) throw new Error("Error al cargar registros");
            return res.json();
        })
        .then(data => setRegistros(data))
        .catch(err => setError(err.message));
    }, [token]); // Se vuelve a ejecutar si cambia el token.

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
                    {/* Recorro todos los registros y los muestro en filas */}
                    {registros.map((reg) => (
                        <tr key={reg.id}>
                            {/* Datos del usuario */}
                            <td>{reg.usuario.nombre}</td>
                            <td>{reg.usuario.email}</td>

                            {/* Fecha del registro */}
                            <td style={{ textAlign: 'center' }}>{reg.fecha}</td>

                            {/* Hora de entrada */}
                            <td style={{ textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>
                                {reg.horaEntrada.substring(0, 5)}
                            </td>

                            {/* Hora de salida (si existe) */}
                            <td style={{ textAlign: 'center', color: '#dc3545', fontWeight: 'bold' }}>
                                {reg.horaSalida ? reg.horaSalida.substring(0, 5) : '-'}
                            </td>

                            {/* Total de horas trabajadas */}
                            <td style={{ textAlign: 'right' }}>
                                {reg.horaSalida ? (
                                    // Si el registro está cerrado, muestro las horas trabajadas.
                                    <span className="btn small" style={{ cursor: 'default', opacity: 1 }}>
                                        {reg.horasTrabajadas && reg.horasTrabajadas > 0 
                                            ? `${reg.horasTrabajadas} h` 
                                            : '0 h'}
                                    </span>
                                ) : (
                                    // Si no tiene hora de salida, significa que sigue trabajando.
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
