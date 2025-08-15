import logo from './logo.svg';
import './App.css';
import './mainPage';
import React from 'react';
import MainPage from './mainPage';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return <MainPage/>
  // return (
  //   <div className="text-center mt-10">
  //     <h1 className="text-4xl font-bold underline text-blue-600">
  //       Hello, Tailwind CSS!
  //     </h1>
  //     <p className="mt-4 text-gray-700">Your Tailwind setup is working.</p>
  //   </div>
  // );
}

export default App;
