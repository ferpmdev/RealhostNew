import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Votes/Votes';
import { getUser } from './redux/ducks/userSlice';
import './app.css';

export default function App() {
  const dispatch = useDispatch();
  const [valor, setValor] = useState('');
  const [input, setInput] = useState('');

  //*********************************
  /*
  const [resultados, setResultados] = useState([]);
  
  const buscarResultados = async () => {
    const API_KEY = 'Oqz6xcqH_uiRhQGDrd-76c0n6ITxvnKfPdTtnBUibT4';
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=40`;
    
    const response = await fetch(URL);
    const data = await response.json();
    setResultados(data.results);
    console.log(data);
  };
*******************************************************  */

  const handleSubmit = (e) => {
    e.preventDefault();
    setValor(input);
  };

  useEffect(() => {
    dispatch(getUser({ test: { valor }, id: 1 }));
  }, [dispatch, valor]);

  const user = useSelector((state) => state.user);

  const count = useSelector((state) => state.counter.count);
  const voters = [
    {
      name: 'Alberto',
      url: 'alberto.jpg',
      id: 1,
    },
    {
      name: 'Horacio',
      url: 'horacio.jpg',
      id: 2,
    },
    {
      name: 'Patricia',
      url: 'patricia.jpg',
      id: 3,
    },
    {
      name: 'Cristina',
      url: 'cristina.jpg',
      id: 4,
    },
    {
      name: 'Javier',
      url: 'javier.jpg',
      id: 5,
    },
    {
      name: 'Sergio',
      url: 'sergio.jpg',
      id: 6,
    },
  ];
  return (
    <div className="parent">
      <h4 className="h4"> Elecciones Presidenciales Argentinas 2023 </h4>
      <h2 className="h2">primero hay que votar</h2>
      <h1 className="h1"> total: {count}</h1>
      <div className="container-cards">
        {voters.map((voter) => (
          <Counter name={voter.name} key={voter.id} img={voter.url} />
        ))}
      </div>
      <div className="black">
        <h2 className="h2">
          ¿Y ahora a<br /> que país te vas?
        </h2>
        <form className="search__box" onSubmit={handleSubmit}>
          <input
            className="search__box--input"
            placeholder="Busca tu país"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <div className="main__content">
          {/* <div className="main__content--grid">
          {resultados.map((elemento, indice) => {
            return <img key={indice} src={elemento.urls.regular} />;
          })}
        </div> */}
        </div>
      </div>
    </div>
  );
}
