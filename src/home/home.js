import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom"; 

function Home() {  
  return (
    <main className='App-main'>
        <div className='pokemonsCartas'>
            <h1 style={{color:"white"}} className="pokemonsCartas-title">DESCUBRE EL MUNDO POKEMON</h1>
            <div className='pokemonsCartas-cartas'>
                <img src='https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/SMP/SMP_ES_SM76.png' alt=''></img>
                <img src='https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/BWP/BWP_ES_BW89.png' alt=''></img>
                <img src='https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/BWP/BWP_ES_BW66.png' alt=''></img>
                <img src='https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/BWP/BWP_ES_BW06.png' alt=''></img>
            </div>
        </div>
        <h1 style={{color:"white"}} className="sectionTitle2">CONOCE TODO SOBRE LOS POKEMONS, SUS ATAQUES DE VIDA, TIPOS, EVOLUCIONES Y MUCHAS COSAS MÁS..</h1>
        <div className='section2'>
            <Carousel variant="dark" indicators="false">
                <Carousel.Item>
                    <img
                        className="d-block imagenSection"
                        src="https://images5.alphacoders.com/613/thumb-1920-613933.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imagenSection"
                        src="https://fondosmil.com/fondo/14707.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imagenSection"
                        src="https://images2.alphacoders.com/112/1125531.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='section3'>
            <h1 style={{color:"white"}} className="pokemonsCartas-title2">¿QUIERES JUGAR A <i>"QUIÉN ES ESE POKEMON"</i> ?</h1>
            <img src="https://i.stack.imgur.com/KsHbF.jpg" alt=""></img>
            <Link to="/game"><button id="gameBtn">Play Game</button></Link>
        </div>
        <footer className="text-center text-white" id='footer'>
            <div className="container pt-4 text-white" id="social">
                <section className="mb-4">
                <a href="" className="me-4 text-light">
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="" className="me-4 text-light">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="" className="me-4 text-light">
                    <i className="fa-brands fa-google"></i>
                </a>
                <a href="" className="me-4 text-light">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="" className="me-4 text-light">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="" className="me-4 text-light">
                    <i className="fa-brands fa-github"></i>
                </a>
                </section>
            </div>

            <div className="text-center text-light p-3">
                2024
            </div>
        </footer>
    </main>
  );
}

export default Home;
