import { useParams } from "react-router-dom"; 
import { useState, useEffect } from 'react';
import "./pokemonDetails.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Carousel from 'react-bootstrap/Carousel';


function PokemonDetails(){
    const params = useParams();

    var [datosPokemon, setDatosPokemon] = useState([]);
    var [isLoaded, setIsLoaded] = useState(false);


    function cargarDatos(){
        fetch("https://pokeapi.co/api/v2/pokemon/"+params.name)
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
        const data = [
        {
          name: 'HP',
          pv: datosPokemon.stats[0].base_stat,
        },
        {
          name: 'ATTACK',
          pv: datosPokemon.stats[1].base_stat,
        },
        {
          name: 'DEFENSE',
          pv: datosPokemon.stats[2].base_stat,
        },
        {
          name: 'SPECIAL ATTACK',
          pv: datosPokemon.stats[3].base_stat,
        },
        {
          name: 'SPECIAL DEFENSE',
          pv: datosPokemon.stats[4].base_stat,
        },
        {
          name: 'SPEED',
          pv: datosPokemon.stats[5].base_stat,
        }
      ];
        return (<>
            <div className="detailsContainer">
                <div className="pokeName">
                    <h1>{params.name[0].toUpperCase() + params.name.substring(1)}</h1>
                </div>
                <div className="details">
                    <div className="detailsImg">
                        <Carousel variant="dark">
                          <Carousel.Item>
                            <img
                              className="d-block imagen"
                              src={datosPokemon.sprites.other.home.front_default}
                              alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block imagen"
                              src={datosPokemon.sprites.other.home.front_shiny}
                              alt="Second slide"
                            />

                            <Carousel.Caption>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="details-cont">
                        <div className="detail"><h3>Height</h3> : <span>{datosPokemon.height / 10} m</span></div>
                        <div className="detail"><h3>Weight</h3> : <span>{datosPokemon.weight / 10} kg</span></div>
                        <div className="detail"><h3>Type</h3> : {whichType(datosPokemon.types[0].type.name)}</div>
                        <div className="detail"><h3>Ability</h3> : <span>{datosPokemon.abilities[0].ability.name}</span></div>
                    </div>
    
                </div>
                <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                    >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
            </>)
    }
}

export default PokemonDetails;