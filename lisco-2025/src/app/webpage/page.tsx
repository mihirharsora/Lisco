"use client";

import React, { useState } from 'react';
import './style.css';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("Welcome to My React + TypeScript Page!");

  const handleClick = () => {
    setMessage("Thanks for clicking the button!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
};

export default App;
