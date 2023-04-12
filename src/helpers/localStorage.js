const QUESTION_KEY = 'questions';

export const getLocalStorage = () => {
  // pegue o conteúdo da chave QUESTION_KEY do localStorage
  // Faça o JSON.parce do conteúdo
  // retorne

  const data = JSON.parse(localStorage.getItem(QUESTION_KEY));
  return data;
};

export const setLocalStorage = (value) => {
  // Faça o JSON.stringify do value
  // guarde o retorno na chave QUESTION_KEY no localStorage
  const data = JSON.stringify(value);
  localStorage.setItem(QUESTION_KEY, data);
};
