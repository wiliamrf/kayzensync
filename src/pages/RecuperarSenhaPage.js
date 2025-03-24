import React from "react";

const RecuperarSenhaPage = () => {
  return (
    <div className="recuperar-senha-page">
      <h2>Recuperar Senha</h2>
      <form>
        <input type="email" placeholder="E-mail cadastrado" required />
        <button type="submit">Enviar link de recuperação</button>
      </form>
    </div>
  );
};

export default RecuperarSenhaPage;
