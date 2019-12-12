import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';
import Questions from "./Questions/Questions";
import Button from "../components/Button";
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";

// HERE WE UPDATE OUR STATE

const Root = (props) => {

  const [ answeredQuestionsShowFlag, setAnsweredQuestionsShowFlag ] = useState(false);


  const handleClickShowFlag = () => {
    setAnsweredQuestionsShowFlag(false);
  }
  const handleClickNotShowFlag = () => {
    setAnsweredQuestionsShowFlag(true);
  }

  return (
    <div>
      <br />
      { answeredQuestionsShowFlag ?
      <React.Fragment>
        <Button clicked={handleClickShowFlag} label={"unanswered"} color={"white"}/>
        <Button clicked={handleClickNotShowFlag} label={"answered"} bgColor={"rgba(0,212,255,0.6)"} />
        <Questions answeredQuestions={props.answeredQuestions}/>
      </React.Fragment>
      :
      <React.Fragment>
        <Button clicked={handleClickShowFlag} label={"unanswered"}  bgColor={"rgba(0,212,255,0.6)"} />
        <Button clicked={handleClickNotShowFlag} label={"answered"} color={"white"}/>
        <Questions users={props.users} answeredQuestions={props.unansweredQuestions}/>
      </React.Fragment>
      }
    </div>
  )
}

export default withRouter(Root);
