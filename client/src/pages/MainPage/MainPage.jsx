import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function MainPage() {
  return (
    <div className='glavDiv container-fluid d-flex justify-content-center align-items-center full-height flex-column mx-auto'>
    <h1 className='glow text-center'>Приветствую тебя, дорогой друг!</h1>
    <Link className='glow mt-5 button glow-button' to="/topics">Вход в игру</Link>
    <img src="ezgif-6-03cb5a1a91.gif" className='mt-5 rounded-5' alt="Hampster"  />
    </div>
  )
}

export default MainPage