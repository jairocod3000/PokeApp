import './pokemons.css'; 
import { useState, useEffect } from 'react';
import PokemonCard from "../pokemonCard/pokemonCard";
import { Link } from "react-router-dom";

function Pokemons() {

  const [listaPokemons, setNumPokemons] = useState([]);
  const [urlPokeAPI, setUrlPokeAPI] = useState('https://pokeapi.co/api/v2/pokemon?limit=32');

  function cargarTodos(){
    fetch(urlPokeAPI)
    .then(response => response.json())
    .then(datosAPI => {
      setNumPokemons(listaPokemons.concat(datosAPI.results))
      setUrlPokeAPI(datosAPI.next)
    });
  }

  useEffect(()=>cargarTodos(), []);

  function cargarMas(){
    cargarTodos();
  }
  
  return (
    <main className='App-main'>
        <div className='pokemonContainer'>
            {
            listaPokemons.map((pokemon)=>
            <Link to={"/detalles/"+pokemon.name} key={pokemon.name}><PokemonCard  pokemonName={pokemon.name}/></Link>
            )
            }
        </div>
        <button onClick={cargarMas} className="moreBtn">Cargar mas</button>
    </main>
  );
}

export default Pokemons;
