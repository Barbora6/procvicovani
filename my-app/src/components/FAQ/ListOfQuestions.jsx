import { Question } from "./Question";
import questions from "../../data/data-question";

export const ListOfQuestions = () => {
  return (
    <div>
      {questions.map((oneQuestion) => {
        return <Question key={oneQuestion.id} {...oneQuestion} />;
      })}
    </div>
  );
};

// Pomocí funkcemapzačnemeprocházetnašedataapromítnemejedokomponenty
//  Question.Zadáme id jako unikátní identifikátor a zbytek dat(title a info)pošleme přes tzv.
//  rest parameter,který vezme vždy zbytek apošle ho do Question
