//seccion import

//.- de React, de archivos propios, Sass, Images
import { useState, useEffect } from 'react';
//import '../services/api.js';
import '../styles/App.scss';

/*  COMPONENTE */
function App() {
  const [quoteList, setquoteList] = useState([]);
  const [quoteSearch, setQuoteSearch] = useState('');
  const [characterSelect, setCharacterSelect] = useState('all');
  
  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
    )
      .then((response) => response.json())
      .then((response) => {
        setquoteList(response);
      });
  }, []);

  const handleQuoteSearch = (ev) => {
    setQuoteSearch(ev.target.value);
  };

  const handleCharacterSelect = (ev) => {
    setCharacterSelect(ev.target.value);
  }

  const renderQuoteList = () => {
    return quoteList.filter((eachSearch) =>
      eachSearch.quote.toLowerCase().includes(quoteSearch.toLowerCase())
    )
    .filter((eachSelect) => {
    if (characterSelect === 'all') {
      return eachSelect
    } else {
      eachSelect.character === characterSelect);
    }
        
      
    }
    .map((eachQuote, index) => (
      <li key={index}>
        <p>
          {eachQuote.quote}
          <span>{eachQuote.character}</span>
        </p>
      </li>
    ));
  };

  return (
    <div>
      <h1>Frases de Friends</h1>
      <form>
        <label htmlFor="quote">Filtrar por frase</label>
        <input
          type="text"
          name="quote"
          id="quote"
          value={quoteSearch}
          onInput={handleQuoteSearch}
        />
        <label htmlFor="character">Filtrar por personaje</label>
        <select name="select" id="character" value={characterSelect}
          onChange={handleCharacterSelect}>
          <option value="all">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
      </form>
      <ul>{renderQuoteList()}</ul>
      <form>
        <h2>Añadir una nueva frase</h2>
        <label>Frase</label>
        <input type="text" />
        <label htmlFor="">Personaje</label>
        <input type="text" />
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
}

export default App;
