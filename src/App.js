import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Questions from './components/Questions';
import { fetchApi } from './helpers/api';
import { getLocalStorage, setLocalStorage } from './helpers/localStorage';

// import "./App.css";

class App extends React.Component {
  state = {
    user: '',
    name: '',
    img: '',
    questions: [],
    question: '',
  };

  handleChange = () => {
    // receba do target o name e o value
    // crie o setState para o [name]: value
  };

  handleLogin = async () => {
    // pegue o user do state
    // passe o user para a função fetchApi do aquivo helpers/api
    // set os estado name e img com os dados de retorno da api name e avatar_url
  };

  handleLogout = () => {
    // limpe os campos de user, name e img
  };

  handleSend = () => {
    // recebe os estados question, questions, name, img
    // monte um novo objeto com as chaves question, name, img
    // crie um novo array e espalhe o estado questions e em seguida passe o novo objeto
    // set o estado questions com o novo array
    // limpe o estado question
    // chave a função setLocalStorage de helpers/localStorage com o novo array
  };

  componentDidMount() {
    // crie uma constante com para receber o resultado da função getLocalStorage de helpers/localStorage
    // Caso exista retorno set em questions
  }

  render() {
    return (
      <div className="App">
        <Header
        // passe as props
        />
        <Form
        // passe as props
        />
        <Questions
        // passe as props
        />
      </div>
    );
  }
}

export default App;
