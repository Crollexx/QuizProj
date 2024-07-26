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
      setRightAnswer("ДААААААА!!!!");
      setTimeout(() => {
        setAnswer("");
      }, 1000);
    } else {
      setRightAnswer(`НЕЕЕЕ!! Правильный ответ: ${question.answer}`);
      setAnswer("");
    }
  }

  return (
    <div className="glavDiv container-fluid d-flex justify-content-center align-items-center full-height flex-column mx-auto'">
      <div>
        {question.img && <img className="img" src={question.img} alt="Question"  />}
        <p className="glow text-center mt-3">{question.question || "Loading..."}</p>
        <div>
        {id == 19 || id == 28 ? (
              <Link className="size mt-5 button glow-button mx-5" to="/topics" >
                Категории
              </Link>

          ) : (

              <Link className="size mt-5 button glow-button mx-5" to={`/asks/${+id + 1}`} >
                Далее
              </Link>
          )}

          <input  className='input rounded-start mt-5'
            placeholder="Введите Ваш ответ"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <a className="size mt-5 button glow-button me-5 " type="button" onClick={checkAnswer} >
            OK
          </a>

            <Link className="size mt-5 button glow-button mx-5" to="/" >
              На Главную
            </Link>
        </div>
        
      </div>
      <div className="glow answer">{rightAnswer}</div>
    </div>
  );
}
