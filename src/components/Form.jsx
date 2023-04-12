import React, { Component } from 'react';

export default class Form extends Component {

  // - 1 - receber as props question, handleChange e handleSend
  // - 2 - colocar as props em seus lugares

  render() {
    return (
      <div>
        <label htmlFor="">
          DIGITE AQUI A SUA DÚVIDA:
          <textarea
            name=""
            id="question"
            value={}
            onChange={}
          />
        </label>
        <button onClick={() => {}}>Enviar</button>
      </div>
    );
  }
}
