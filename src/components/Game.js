import React, { useState } from 'react';
import peach from '../assets/peach_pic.png';
import '../App.css'; // Убедитесь, что путь к CSS правильный

const Game = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    // Здесь вы можете отправлять данные на сервер или обновлять состояние игры
  };

  return (
    <div className='container'>
      <div className='click-counter'>
        <h2>Clicks: {clickCount}</h2>
      </div>
      <button onClick={handleClick}>
        <img src={peach} alt="Peach" />
      </button>
    </div>
  );
};

export default Game;

