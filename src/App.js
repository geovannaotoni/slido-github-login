import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Questions from './components/Questions';
import { fetchApi } from './helpers/api';
import { getLocalStorage, setLocalStorage } from './helpers/localStorage';

import './App.css';

class App extends React.Component {
  state = {
    user: '',
    name: '',
    img: '',
    questions: [],
    question: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleLogin = async () => {
    // pegue o user do state
    // passe o user para a função fetchApi do aquivo helpers/api
    // set os estado name e img com os dados de retorno da api name e avatar_url
    const { user } = this.state;
    const data = await fetchApi(user);
    const { name, avatar_url } = data;
    this.setState({
      name,
      img: avatar_url,
    });
  };

  handleLogout = () => {
    // limpe os campos de user, name e img
    this.setState({
      user: '',
      name: '',
      img: '',
    });
  };

  handleSend = () => {
    // recebe os estados question, questions, name, img
    // monte um novo objeto com as chaves question, name, img
    // crie um novo array e espalhe o estado questions e em seguida passe o novo objeto
    // set o estado questions com o novo array
    // limpe o estado question
    // chave a função setLocalStorage de helpers/localStorage com o novo array
    const { name, img, question, questions } = this.state;
    const newQuestion = {
      name,
      img,
      question,
    };
    this.setState({
      questions: [...questions, newQuestion],
      question: '',
    });
    setLocalStorage([...questions, newQuestion]);
  };

  componentDidMount() {
    // crie uma constante com para receber o resultado da função getLocalStorage de helpers/localStorage
    // Caso exista retorno set em questions
    const getQuestions = getLocalStorage();
    if (getQuestions) {
      this.setState({
        questions: getQuestions,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          {...this.state}
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />
        <Form
          {...this.state}
          handleChange={this.handleChange}
          handleSend={this.handleSend}
        />
        <Questions {...this.state} />
      </div>
    );
  }
}

export default App;
