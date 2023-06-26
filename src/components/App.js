//seccion import

//.- de React, de archivos propios, Sass, Images
import { useState, useEffect } from 'react';
//import '../services/api.js';
import '../styles/App.scss';

/*  COMPONENTE */
function App() {
  const [quoteList, setquoteList] = useState([]);
  

  
  useEffect(() => {
    fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json') 
      .then((response) => response.json())
      .then((response) => {
        setquoteList(response);
      });
      
  }, []);

  const renderQuoteList = () => {
    return quoteList.map((eachQuote, index) => (
      <li key={index}>
          <p>{eachQuote.quote}<span>{eachQuote.character}</span></p>
        </li>
    ))
    
  }
  
  return (
    <div>
      <h1>Frases de Friends</h1>
      <form>
        <label>Filtrar por frase</label>
        <input type="text" />
        <label>Filtrar por personaje</label>
        <select name="select">
          <option value="all" selected>
            Todos
          </option>
          <option value="R">Ross</option>
          <option value="M">Monica</option>
          <option value="M">Joey</option>
          <option value="M">Phoebe</option>
          <option value="M">Chandler</option>
          <option value="M">Rachel</option>
        </select>
      </form>
      <ul>
        {renderQuoteList()}
      </ul>
      <form>
        <h2>Añadir una nueva frase</h2>
        <label htmlFor="">Frase</label>
        <input type="text" />
        <label htmlFor="">Personaje</label>
        <input type="text" />
        <input type="submit" value="Añadir"/>
      </form>
    </div>
  );
}

export default App;
