export const fetchApi = async (user) => {
  const url = `https://api.github.com/users/${user}`;

  // Execute o metodo fetch com a url
  // Execute o metodo .json()
  // retorne o resultado

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
