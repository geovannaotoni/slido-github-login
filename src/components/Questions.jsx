import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

export default class Questions extends Component {
  // 1 - receber a prop questions
  // 2 - fazer o map em questions para renderizar o componente QuestionCard
  render() {
    return (
      <div>
        <h1>Dúvidas</h1>

        <QuestionCard />
      </div>
    );
  }
}
