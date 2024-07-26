import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h2>Категории</h2>
      <div>
        {topics.length > 1 &&
          topics.map((topic) => <p key={topic.id}> {topic.title}</p>)}
      </div>
    </>
  );
}

export default Topics;
