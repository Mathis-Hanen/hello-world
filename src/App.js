import React from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  const prenom = 'Mathis';
  const message = `Bonjour ${prenom}`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={()=> alert("Ok") } variant="contained" color="primary">
          Hello World
    </Button>
      </header>
    </div>
  );
}

export default App;
