import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
    const [name, setName] = useState('');

   


    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/log/user' , {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                });

              
                const content = await response.json();


                if(content.name===undefined)
                {
                    setName(content.name);
                    console.log("not authorized");
                }
                else
                    setName(content.name);
         
                    
                console.log()
                

                
            }
        )();
    });

    

    return (
        <div className="App">
            <BrowserRouter>
                <Nav name={name} setName={setName} />

                <main className="form-signin">
                    <Route path="/home" exact component={() => <Home name={name}  />}/>
                    <Route path="/" exact component={() => <Login setName={setName} />}/>
                    <Route path="/register" component={Register}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;