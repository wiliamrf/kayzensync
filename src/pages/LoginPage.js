import React from "react";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem conta? <a href="/registro">Cadastre-se</a>
      </p>
      <p>
        <a href="/recuperar-senha">Esqueci minha senha</a>
      </p>
    </div>
  );
};

export default LoginPage;
