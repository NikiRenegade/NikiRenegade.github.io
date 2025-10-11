import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Привет, меня зовут Никита!</h2>
        <h3>Моя цель - Овладеть навыками фронтенд-разработки для стека C# + React</h3>
        <h3>Технологии, которыми обладаю на данный момент</h3>
        <ul style={{ marginTop: '0' }}>
          <li style={{ display: 'flex', alignItems: 'center' }}>Бэкэнд на C# и Java</li>
          <li style={{ display: 'flex', alignItems: 'center' }}>Верстка на HTML, CSS</li>
          <li style={{ display: 'flex', alignItems: 'center' }}>Базовые навыки JavaScript, Vue</li>
          <li style={{ display: 'flex', alignItems: 'center' }}>SQL</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
