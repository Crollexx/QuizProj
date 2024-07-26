import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function MainPage() {
  return (
    <div className='glavDiv container-fluid d-flex justify-content-center align-items-center full-height flex-column mx-auto'>
      <h1 className='glow text-center'>Слабое звено</h1>
      <blockquote className=' glow quote'>Игра для самых умных</blockquote>
        <Link className='glow mt-2 button glow-button' to={`/topics`} >
          <h1 >Начать</h1>
        </Link>
        <img src="ezgif-6-03cb5a1a91.gif" className='mt-3 rounded-5' alt="Hampster"  />
    </div>
  );
}

export default MainPage;
