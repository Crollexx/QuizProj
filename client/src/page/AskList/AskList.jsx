import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../services/axios";

export default function AskList() {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState("");
  const [rightAnswer, setRightAnswer] = useState("");

  const axiosQuestions = async () => {
    try {
      const { data } = await request.get(`/asks/${id}`);
      setRightAnswer("");
      if (data && data.message === "success" && data.ask) {
        setQuestion(data.ask);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    axiosQuestions();
  }, [id]);

  function checkAnswer() {
    if (answer.toLowerCase().trim() === (question.answer || "").toLowerCase()) {
      setRightAnswer("Красава!!!");
      setTimeout(() => {
        setAnswer("");
      }, 1000);
    } else {
      setRightAnswer(`No!! Правильный ответ: ${question.answer}`);
      setAnswer("");
    }
  }

  return (
    <div>
      <div>
        {question.img && <img src={question.img} alt="Question" />}
        <p>{question.question || "Loading..."}</p>
        <div>
          <input
            placeholder="Введите Ваш ответ"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button type="button" onClick={checkAnswer} >
            OK
          </button>
          {id == 8 || id == 16 ? (
            <button >
              <Link to="/topics" >
                Категории
              </Link>
            </button>
          ) : (
            <button >
              <Link to={`/asks/${+id + 1}`} >
                Далее
              </Link>
            </button>
          )}

          <button >
            <Link to="/" >
              На Главную
            </Link>
          </button>
        </div>
        <div >{rightAnswer}</div>
      </div>
    </div>
  );
}
