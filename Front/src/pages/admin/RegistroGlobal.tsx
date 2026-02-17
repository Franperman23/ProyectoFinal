import React from 'react';
// Ajustado: sube a src, entra en components/admin
import AdminLayout from '../../components/admin/AdminLayout'; 
import RegistroHorarioGlobal from '../../components/admin/RegistroHorarioGlobal';

const RegistroGlobal: React.FC = () => {
    return (
        <AdminLayout>
            <div className="container-fluid py-2">
                <RegistroHorarioGlobal />
            </div>
        </AdminLayout>
    );
};

export default RegistroGlobal;