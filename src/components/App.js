//seccion import

//.- de React, de archivos propios, Sass, Images
import '../styles/App.scss';

/*  COMPONENTE */
function App() {
  /*
    Variables de estado, funciones manejadoras de eventos, variables, funcion handle 
  */
  /* RETURN --> HTML */
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
        <li>
          <p>Frase<span>Personaje</span></p>
        </li>
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
