import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

export default class Questions extends Component {
  // 1 - receber a prop questions
  // 2 - fazer o map em questions para renderizar o componente QuestionCard
  render() {
    const { questions } = this.props;
    return (
      <div>
        <h1>Dúvidas</h1>
        {questions.map((element, index) => (
          <QuestionCard {...element} key={index} />
        ))}
      </div>
    );
  }
}
