import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';
import Questions from "./Questions";
import Button from "../components/Button";
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";

const Logged = (props) => {

  const [ answeredQuestionsShowFlag, setAnsweredQuestionsShowFlag ] = useState(false);

  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  const [questions, setQuestions] = useState(null);
  const [users, setUsers] = useState(null);


  // here I want to load the questions and users
  useEffect( () => {
    const questionsAnsweredTemp = [];
    const questionsUnAnsweredTemp = [];

    _getUsers()
      .then(res => {
        setUsers(res);
      })

    _getQuestions()
      .then(res => {
        setQuestions(res);
        const arrayQuestions = Object.values(res);
        arrayQuestions.forEach( (item, index) => {
          // check if the author of this questions is the logged authors
          if ( arrayQuestions[index].author ===  JSON.parse(localStorage.getItem("authUser")) ) {
            questionsAnsweredTemp.push(item);
          } else {
            questionsUnAnsweredTemp.push(item);
          }
        })

        setAnsweredQuestions(questionsAnsweredTemp);
        setUnansweredQuestions(questionsUnAnsweredTemp);
        console.log(`Questions Answered: ${questionsAnsweredTemp}`);
        console.log(`Questions Unanswered: ${questionsUnAnsweredTemp}`);

      });

  }, [])

  const handleClickShowFlag = () => {
    setAnsweredQuestionsShowFlag(false);
    alert("handleClickShowFlag")
  }
  const handleClickNotShowFlag = () => {
    setAnsweredQuestionsShowFlag(true);
    alert("clicked")
  }

  return (
    <div>
      <br />
      <Button clicked={handleClickShowFlag} label={"unanswered"} bgColor={"rgba(0,212,255,0.6)"}/>
      <Button clicked={handleClickNotShowFlag} label={"answered"}  color={"white"}/>
      <Questions answeredQuestions={answeredQuestions}
        answeredQuestionsShowFlag={answeredQuestionsShowFlag}
        unansweredQuestions={unansweredQuestions}/>
    </div>
  )
}

export default withRouter(Logged);
