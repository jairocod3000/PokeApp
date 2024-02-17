import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from "react-router-dom";

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              navigate("/");
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
      }

    const googleRegister = async (e) => {
        await signInWithPopup(auth, new GoogleAuthProvider())
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }


    return (
        <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                <div className="card">
                    <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center pe-5">
        
                        <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</h1>
        
                        <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                                <input name="email" type="email" id="form3Example3c" className="form-control" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            </div>
        
                            <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                                <input name="password" type="password" id="form3Example4c" className="form-control" placeholder="Your Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            </div> 

                            <div>
                            <button type="submit" className="btn btn-primary btn-lg mt-3 mb-3 w-100" onClick={onSubmit}>Sign Up</button>
                            </div>

                            <span className="text-center"></span>

                            <div className="d-flex justify-content-center align-items-center m-4 gap-5">
                               
                            </div>         

                            <Link to="/login">¿Tienes una cuenta?</Link>            
                        </form>
        
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center justify-content-center order-1 order-lg-2 ps-5">
        
                            <img src="https://archives.bulbagarden.net/media/upload/thumb/9/9a/0151Mew.png/1200px-0151Mew.png"
                                className="img-fluid" alt="Sign Up banner"/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  </section>
    )
}

export default Register;