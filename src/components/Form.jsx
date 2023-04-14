import React, { Component } from 'react';

export default class Form extends Component {
  // - 1 - receber as props question, handleChange e handleSend
  // - 2 - colocar as props em seus lugares

  render() {
    const { name, question, handleChange, handleSend } = this.props;
    return (
      <div>
        {name && (
          <div className="form__container">
            <label htmlFor="question">
              DIGITE AQUI A SUA DÚVIDA:
              <textarea
                name="question"
                id="question"
                value={question}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSend}>Enviar</button>
          </div>
        )}
      </div>
    );
  }
}
