import React, { Component } from 'react';

export default class QuestionCard extends Component {
  // 1 - receber as props name, img, question
  // 2 - passar as props em seus lugares

  render() {
    return (
      <div>
        <div>
          <img width="50" height="50" />
          <p>NOME DA PESSOA</p>
        </div>
        <div>
          <p>QUESTÃO</p>
        </div>
      </div>
    );
  }
}
