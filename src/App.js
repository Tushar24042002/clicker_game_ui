// client/src/components/App.js
import React from 'react';
import './App.css';
import Game from './pages/Game';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Game />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
export default App;
