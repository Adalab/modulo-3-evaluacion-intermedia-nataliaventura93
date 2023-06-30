
import { useState, useEffect } from 'react';
import '../styles/App.scss';

function App() {
  const [quoteList, setquoteList] = useState([]);
  const [quoteSearch, setQuoteSearch] = useState('');
  const [characterSelect, setCharacterSelect] = useState('all');
  const [newQuote, setNewQuote] = useState({});
  
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

  const handleNewQuote = (ev) => {
    setNewQuote({...newQuote, [ev.target.name]: ev.target.value})
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    setquoteList([...quoteList, newQuote]);
  }

  const renderQuoteList = () => {
    return quoteList.filter((eachSearch) =>
      eachSearch.quote.toLowerCase().includes(quoteSearch.toLowerCase())
    )
    .filter((eachSelect) => {
    if (characterSelect === 'all') {
      return eachSelect
    } else {
      return eachSelect.character === characterSelect;
    }
    })
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
      <header>
      <h1>Frases de Friends</h1>
      </header>
      <form>
        <label htmlFor="quote">Filtrar por frase</label>
        <input
          type="text"
          for="quote"
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
        <label htmlFor="newQuote">Frase</label>
        <input id="newQuote"type="text" name="quote" onInput={handleNewQuote} value={newQuote.quote}/>
        <label htmlFor="newCharacter">Personaje</label>
        <input id="newCharacter" type="text" name="character" onInput={handleNewQuote} value={newQuote.character}/>
        <input type="submit" value="Añadir" onClick={handleClick} />
      </form>
    </div>
  );
}

export default App;
