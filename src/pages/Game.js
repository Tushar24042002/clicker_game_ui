// src/components/Game.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Score from '../components/Score';
import Prize from '../components/Prize';
import Button from '../components/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Game = () => {
  const [score, setScore] = useState(0);
  const [prizes, setPrizes] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get('https://clicker-game-95zg.onrender.com/api/getUserData', {
        withCredentials: true, 
      });
      setScore(response.data.score);
      setPrizes(response.data.prizes);
    };

    fetchUserData();
  }, []);
  
  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://clicker-game-95zg.onrender.com/api/clickButton', {}, {
        withCredentials: true,
      });
      setScore(response.data.score);
      setPrizes(response.data.prizes);
    //   alert(response.data.message);
      toast.success(response?.data?.message);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Cookie Clicker Game</h1>
      <Score score={score} />
      <Prize prizes={prizes} />
      <Button onClick={handleButtonClick} loading={loading} />
    </div>
  );
}


export default Game;
