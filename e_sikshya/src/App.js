import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from "./login";
import { Register } from "./register";

function App() {
  const [currentForm , setcurrentForm]=useState('login');
  return (
    <div className="App">
      {
        currentForm == "login" ? <Login /> : <Register/>
      }
      
    </div>
  );
}

export default App;
