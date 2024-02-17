import { useState, useEffect } from "react"; 
import "./pokemonGame.css";


function PokemonGame(){
    const randomNum = Math.floor(Math.random() * 151);

    var [pokemon, setPokemon] = useState();
    var [isLoaded, setIsLoaded] = useState(false);

    function cargarPokemon(){
        fetch("https://pokeapi.co/api/v2/pokemon/"+randomNum)
        .then(response => response.json())
        .then(datosAPI => {
          setPokemon(pokemon = datosAPI)
          setIsLoaded(isLoaded = true)
        }); 
    }

    useEffect(()=> cargarPokemon(), []);
    
    function checkPokemon(){
        if(isLoaded){
            if(document.getElementById("inputText").value.toLowerCase() == pokemon.name.toLowerCase()){
                document.getElementById("pokeImg").classList.add("appearImg")
                document.getElementById("btnNewGame").classList.add("newGame")
                console.log("correcto");
            }else{
                document.getElementById("pokeImg").classList.add("wrong")
                document.getElementById("btnNewGame").classList.remove("newGame")
                setTimeout(() => {
                    document.getElementById("pokeImg").classList.remove("wrong")
                }, 2000);
                console.log("incorrecto");
            }
        }
    }

    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
            checkPokemon()
        }
    });

    function newGame(){
        document.getElementById("pokeImg").classList.remove("appearImg")
        document.getElementById("btnNewGame").classList.remove("newGame")
        document.getElementById("inputText").value = "";
        cargarPokemon()
    }

    if(isLoaded){
        return(
            <div className="gameContainer">
                <div className="image">
                    <img id="pokeImg" className="" src={pokemon.sprites.other.home.front_default} alt=""></img>
                </div>
                <div className="input">
                   <input id="inputText" type="text" placeholder="Eevee..."></input>
                   <button id="btn" onClick={checkPokemon}>GUESS</button>
                   <button id="btnNewGame" className="" onClick={newGame}>NEW GAME</button>
                </div>
            </div>
        )
    }
}

export default PokemonGame;