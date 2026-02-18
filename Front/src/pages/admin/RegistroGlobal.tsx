import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import RegistroHorarioGlobal from '../../components/admin/RegistroHorarioGlobal';

const RegistroGlobal: React.FC = () => {
    return (
        <AdminLayout>

            {/* Contenedor principal con un pequeño padding */}
            <div className="container-fluid py-2">

                {/* Componente que contiene toda la lógica y tabla del registro horario */}
                <RegistroHorarioGlobal />
            </div>
        </AdminLayout>
    );
};

export default RegistroGlobal;
