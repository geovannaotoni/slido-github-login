import React, { Component } from 'react';

export default class Header extends Component {

//   1 - receber as props user, handleChange, handleLogin, handleLogout, name e img
// 2 - passar as props em seus lugares
// 3 - desenvolver o ternário para exibir o login apenas quando o usuário não estiver logado


  render() {
    return (
      <header>
        <div>
          <h1>SLIDO GIT</h1>
        </div>
        {/* ternário aqui  */}
          <div>
            <img />
            <p>NOME DO USUÁRIO</p>
            <button onClick={ () => {} }>LOGOUT</button>
          </div>
        {/* caso falso */}
          <div>
            <label htmlFor="user">
              Digite o seu usuário git:
              <input
                type="text"
                name=""
                value={}
                onChange={() =>{}}
                id="user"
              />
            </label>
            <button onClick={() => {}}>LOGAR</button>
          </div>
        {/* fechamento do ternário */}
      </header>
    );
  }
}
