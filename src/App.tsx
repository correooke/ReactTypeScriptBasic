import * as React from 'react';
import './App.css';

import Bye from './components/Bye';
import Hello from './components/Hello';
import Otro from './components/Otro';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello name={"Emiliano"} enthusiasmLevel={1} />
        <Bye name="Emi" isTheHouseOfPaperStyle={false} />
        <Otro />
      </div>
    );
  }
}

export default App;
