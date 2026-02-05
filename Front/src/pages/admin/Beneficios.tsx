import React from "react";

const Beneficios: React.FC = () => {
  return (
    <main className="panel">
      <h2>Beneficios</h2>

      <div className="registro-botones">
        <button className="btn">Día</button>
        <button className="btn">Semana</button>
        <button className="btn">Mes</button>
      </div>

      <div className="card">
        <h3>Total: 350 €</h3>
      </div>
    </main>
  );
};

export default Beneficios;
