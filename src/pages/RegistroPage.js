import React from "react";

const RegistroPage = () => {
  return (
    <div className="registro-page">
      <h2>Cadastro</h2>
      <form>
        <input type="text" placeholder="Nome completo" required />
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroPage;
