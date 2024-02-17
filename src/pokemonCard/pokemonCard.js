import "./pokemonCard.css"; 
import { useState, useEffect } from 'react';

function PokemonCard(props){
    var [datosPokemon, setDatosPokemon] = useState([]);
    var [isLoaded, setIsLoaded] = useState(false);


    function cargarDatos(){
        fetch("https://pokeapi.co/api/v2/pokemon/"+props.pokemonName)
        .then(response => response.json())
        .then(datosAPI => {
          setDatosPokemon(datosPokemon = datosAPI)
          setIsLoaded(isLoaded = true)
        }); 
    }

    useEffect(()=> cargarDatos(), []);

    function whichType(type){
        switch (type) {
            case "steel":
                return <p className="pokeType" style={{backgroundColor: '#60A2B9', color: 'white'}}>{type}</p>
            case "water":
                return <p className="pokeType" style={{backgroundColor: '#2481EF', color: 'white'}}>{type}</p>
            case "bug":
                return <p className="pokeType" style={{backgroundColor: '#92A212', color: 'white'}}>{type}</p>
            case "dragon":
                return <p className="pokeType" style={{backgroundColor: '#4F60E2', color: 'white'}}>{type}</p>
            case "electric":
                return <p className="pokeType" style={{backgroundColor: '#FAC100', color: 'white'}}>{type}</p>
            case "ghost":
                return <p className="pokeType" style={{backgroundColor: '#704170', color: 'white'}}>{type}</p>
            case "fire":
                return <p className="pokeType" style={{backgroundColor: '#E72324', color: 'white'}}>{type}</p>
            case "fairy":
                return <p className="pokeType" style={{backgroundColor: '#EF70EF', color: 'white'}}>{type}</p>
            case "ice":
                return <p className="pokeType" style={{backgroundColor: '#60A2B9', color: 'white'}}>{type}</p>
            case "fighting":
                return <p className="pokeType" style={{backgroundColor: '#FF8100', color: 'white'}}>{type}</p>
            case "normal":
                return <p className="pokeType" style={{backgroundColor: '#A0A2A0', color: 'white'}}>{type}</p>
            case "grass":
                return <p className="pokeType" style={{backgroundColor: '#3DA224', color: 'white'}}>{type}</p>
            case "psychic":
                return <p className="pokeType" style={{backgroundColor: '#EF4179', color: 'white'}}>{type}</p>
            case "rock":
                return <p className="pokeType" style={{backgroundColor: '#B0AA82', color: 'white'}}>{type}</p>
            case "dark":
                return <p className="pokeType" style={{backgroundColor: '#4F3F3D', color: 'white'}}>{type}</p>
            case "ground":
                return <p className="pokeType" style={{backgroundColor: '#92501B', color: 'white'}}>{type}</p>
            case "poison":
                return <p className="pokeType" style={{backgroundColor: '#8F41CB', color: 'white'}}>{type}</p>
            case "flying":
                return <p className="pokeType" style={{backgroundColor: '#81B9EF', color: 'white'}}>{type}</p>
        
            default:
                break;
        }
    }

    if(isLoaded){
        return (
            <div className="pokeCard">
                <div>
                    <img src={datosPokemon.sprites.front_default} alt=""></img>
                </div>
                <hr/>
                <h3>{props.pokemonName[0].toUpperCase() + props.pokemonName.substring(1)}</h3>
                {whichType(datosPokemon.types[0].type.name)}
            </div>
        )
    }
}

export default PokemonCard;