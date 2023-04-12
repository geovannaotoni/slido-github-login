import React, { Component } from 'react';

export default class Header extends Component {
  //   1 - receber as props user, handleChange, handleLogin, handleLogout, name e img
  // 2 - passar as props em seus lugares
  // 3 - desenvolver o ternário para exibir o login apenas quando o usuário não estiver logado

  render() {
    const { user, name, img, handleChange, handleLogin, handleLogout } =
      this.props;
    return (
      <header>
        <div>
          <h1>SLIDO GIT</h1>
        </div>
        {name ? (
          <div>
            <img src={img} width="200" height="200" />
            <p>{name}</p>
            <button onClick={handleLogout}>LOGOUT</button>
          </div>
        ) : (
          <div>
            <label htmlFor="user">
              Digite o seu usuário git:
              <input
                type="text"
                name="user"
                value={user}
                onChange={handleChange}
                id="user"
              />
            </label>
            <button onClick={handleLogin}>LOGAR</button>
          </div>
        )}
      </header>
    );
  }
}
