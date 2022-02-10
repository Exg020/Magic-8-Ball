import React, { useState } from "react";
import "./App.css";

const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
];

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = (event) => {
    event.preventDefault();
    if (!question) {
      return;
    }
    const index = Math.floor(Math.random() * answer.length);
    setAnswer(answers[index]);
  };

  const getQuestion = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div>
      <form onSubmit={getAnswer}>
        <div>
          <label>Question: </label>
          <input value={question} onChange={getQuestion} />
        </div>
        <button type="submit">Get Answer</button>
      </form>
      <div className="circle">
        <p>{answer}</p>
      </div>
    </div>
  );
}
