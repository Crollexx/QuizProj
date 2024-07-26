import React, { useState, useEffect } from 'react'; 
import request from '../services/axios'; 
import { Link } from 'react-router-dom'; 

 
function TopicPage({ title }) { 
  const [topics, setTopics] = useState([]); 
  const axiosTopics = async () => { 
    const { data } = await request.get('/topics'); 
    console.log(data); 
    if (data.message === 'success') { 
      setTopics(data.topics); 
    } 
  }; 
 
  useEffect(() => { 
    axiosTopics(); 
  }, []); 
 
  return ( 
    <div className='glavDiv container-fluid d-flex justify-content-center align-items-center full-height flex-column mx-auto'> 
      <h1 className='glow text-center'>Категория</h1> 
      <div className="topics-container d-flex"> 
        {topics.length > 1 && ( 
          <> 
                <Link to={`/asks/1`} className="topic-link className='glow me-5 mt-5 button glow-button'"> 
                  <h1>{topics[0].title}</h1> 
                </Link> 
                
                <Link to={`/asks/20`} className="topic-link className='glow me-5 mt-5 button glow-button'"> 
                  <h1>{topics[1].title}</h1> 
                </Link> 
           
          </> 
        )} 
      </div> 
      <img src="Hello Kitty Hello Kitty Dancing GIF - Hello Kitty Hello Kitty Dancing Hello Kitty Meme - Discover & Share GIFs.gif" className='mt-5 rounded-5' alt="" />
    </div> 
  ); 
} 
 
export default TopicPage;
