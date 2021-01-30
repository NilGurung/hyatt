import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {`${process.env.PUBLIC_URL}/assets/hyatt.jpg`} className="App-logo" alt="logo" width="250px" height="80px"/>
        <p>
          Welcomes To Hyatt Hotel
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React in less than a day
        </a>
      </header>
    </div>
  );
}

export default App;
