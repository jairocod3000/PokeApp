import './header.css';
import { Link } from "react-router-dom"; 
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Header(){
    const [userID, setUserID] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUserID(user.uid);
            }
        })
    }, [])

    const logOut = ()=>{
        signOut(auth).then(()=>{
            navigate("/");
            setUserID("");
        })
    }

    if(userID !== ""){
        return(
            <div className="App-header">
              <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" className="App-logo" alt="logo" /></Link>
              <div className='nav'>
                <Link to="/"><span>Home</span></Link>
                <Link to="/pokemons"><span>Pokemons</span></Link>
                <Link to="/game"><span>Game</span></Link>
                <span id="navLink" onClick={logOut}><i class="fa-solid fa-right-from-bracket"></i></span>
              </div>
            </div>
        )
    }else{
        return(
            <div className="App-header">
              <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" className="App-logo" alt="logo" /></Link>
              <div className='nav'>
                <Link to="/"><span>Home</span></Link>
                <Link to="/pokemons"><span>Pokemons</span></Link>
                <Link to="/login"><i class="fa-solid fa-user"></i></Link>
              </div>
            </div>
        )
    }
    
}

export default Header;