import React from 'react'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div>
    <h1>Приветствую тебя, дорогой друг!</h1>
    <Link to="/topics">Вход в игру</Link>
    </div>
  )
}

export default MainPage