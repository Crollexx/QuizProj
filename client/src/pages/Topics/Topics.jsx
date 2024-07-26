import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Topics() {
  const [topics, setTopics] = useState([]);

  const allTopics = async () => {
    const { data } = await axios.get("/api/topics");
    console.log(data);
    if (data.message === "success") {
      setTopics(data.topics);
    }
  };

  useEffect(() => {
    allTopics();
  }, []);

  return (
    <>
      <div className='glavDiv container-fluid d-flex justify-content-center align-items-center full-height flex-column mx-auto'>
        <h1 className='glow text-center'>Категории</h1>
        <div className="mt-5">
          {topics.length > 1 &&
            topics.map((topic) => <Link className='glow me-5 mt-5 button glow-button' to='/ask' key={topic.id}> {topic.title}</Link>)}
        </div>
        <img src="Снимок экрана 2024-07-25 175236.png" className='mt-5 rounded-circle' alt="" />

      </div>
    </>
  );
}

export default Topics;
