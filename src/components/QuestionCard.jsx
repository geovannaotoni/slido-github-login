import React, { Component } from 'react';

export default class QuestionCard extends Component {
  // 1 - receber as props name, img, question
  // 2 - passar as props em seus lugares

  render() {
    const { name, img, question } = this.props;
    return (
      <div className="question-card__container">
        <div>
          <img width="50" height="50" src={img} />
          <p className="question-card__name">{name}</p>
        </div>
        <p className="question-card__question">{question}</p>
      </div>
    );
  }
}
