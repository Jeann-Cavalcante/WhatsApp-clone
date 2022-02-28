import React from "react";
import Api from "../Api";
import "./Login.css";

export default ({ onReceive }) => {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Erro!");
    }
  };
  return (
    <main className="login-content">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="logo"
        />
        <h1 className="login__title" />
        <form method="POST" className="login__form">
          <div className="msgError">Login invalido</div>
          <input
            className="login__input"
            id="email-login"
            type="text"
            name="login"
            placeholder="E-mail"
            required
          />
          <span className="login__input-border" />
          <input
            className="login__input"
            id="senha-login"
            type="password"
            name="password"
            placeholder="Senha"
            required
          />
          <span className="login__input-border" />
          <i className="fa fa-eye" aria-hidden="true" />
          <input
            onclick="entrar()"
            name="acao"
            defaultValue="Login"
            className="login__submit"
          />
          <div className="login">
            <button onClick={handleFacebookLogin}>Logar com facebook</button>
          </div>
          <a className="login__reset" href="#">
            Esqueceu a senha?
          </a>
          <br />
          <a className="login__reset" href="/cadastro.html">
            Cadastro
          </a>
        </form>
      </div>
    </main>
  );
};
