import React from 'react';
import { Link } from 'react-router-dom';


function MainPage() {
  return (
    <div >
      <h2 
      >Quiz</h2>
      <div >
        <Link to={`/topics`} >
          <h1 >Start</h1>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
