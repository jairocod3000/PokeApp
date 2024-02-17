import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './header/header';
import Home from "./home/home";
import Pokemons from './pokemons/pokemons';
import PokemonDetails from './pokemonDetails/pokemonDetails';
import PokemonGame from './pokemonGame/pokemonGame';
import PageNotFound from './404/404';
import Login from './login/login';
import Register from './register/register'; 

function App() { 
  return (
    <Router>
      <div className="App">
        <Header/>

        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/pokemons' element={< Pokemons />}></Route>
          <Route exact path='/detalles/:name' element={< PokemonDetails />}></Route>
          <Route exact path='/game' element={< PokemonGame />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
