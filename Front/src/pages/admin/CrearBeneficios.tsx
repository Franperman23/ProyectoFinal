import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import { AuthContext } from "../../context/AuthContext";

const CrearBeneficios: React.FC = () => {

    // Obtengo el token del contexto para acceder a rutas protegidas.
    const { token } = useContext(AuthContext);

    // Hook para redirigir al usuario después de guardar.
    const navigate = useNavigate();
    
    // Estado inicial de la fecha: por defecto el día actual en formato YYYY-MM-DD.
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);

    // Estado para la ganancia introducida por el usuario.
    const [ganancia, setGanancia] = useState("");

    // Estado para mostrar "Guardando..." mientras se envía el formulario.
    const [cargando, setCargando] = useState(false);

    // FUNCIÓN PRINCIPAL DEL FORMULARIO
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Evita recargar la página.
        setCargando(true);

        // Datos que enviamos al backend.
        const data = { 
            fecha: fecha, 
            ganancia: parseFloat(ganancia) 
        };

        // Petición POST protegida con token JWT.
        try {
            const res = await fetch("/api/admin/beneficios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            // Si todo va bien, redirijo a la lista de beneficios.
            if (res.ok) {
                navigate("/admin/beneficios");
            } else {
                alert("Error al guardar: Verifica que el backend esté encendido.");
            }
        } catch (err) {
            console.error(err);
            alert("Error de conexión con el servidor.");
        } finally {
            setCargando(false);
        }
    };

    // Estilos rápidos para mejorar la presentación del formulario.
    const estiloCampo = { marginBottom: '20px', display: 'flex', flexDirection: 'column' as const };
    const estiloLabel = { fontWeight: 'bold', marginBottom: '8px', color: '#555' };
    const estiloInput = { padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' };

    return (
        <AdminLayout>
            {/* Contenedor centrado para el formulario */}
            <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
                <h2 style={{ marginBottom: '25px', color: '#333' }}>Registrar Ganancia Diaria</h2>
                
                {/* FORMULARIO */}
                <form
                    onSubmit={handleSubmit}
                    style={{
                        background: '#f9f9f9',
                        padding: '25px',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    {/* Campo FECHA */}
                    <div style={estiloCampo}>
                        <label style={estiloLabel}>Fecha del día:</label>
                        <input 
                            type="date"
                            style={estiloInput}
                            value={fecha}
                            onChange={e => setFecha(e.target.value)}
                            required
                        />
                    </div>

                    {/* Campo GANANCIA */}
                    <div style={estiloCampo}>
                        <label style={estiloLabel}>Total Ganado (€):</label>
                        <input 
                            type="number"
                            step="0.01"
                            style={estiloInput}
                            placeholder="Ej: 155.50"
                            value={ganancia}
                            onChange={e => setGanancia(e.target.value)}
                            required
                        />
                    </div>

                    {/* Botones */}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <button 
                            type="submit"
                            className="btn crear"
                            disabled={cargando}
                            style={{ flex: 1, padding: '12px', cursor: cargando ? 'not-allowed' : 'pointer' }}
                        >
                            {cargando ? "Guardando..." : "Guardar Registro"}
                        </button>
                        
                        <button 
                            type="button"
                            className="btn danger"
                            onClick={() => navigate("/admin/beneficios")}
                            style={{ flex: 1, padding: '12px' }}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default CrearBeneficios;
