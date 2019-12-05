import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';
import Questions from "./Questions";
import Button from "../components/Button";
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";


const Logged = (props) => {

  const [unanswered, setUnanswered] = useState([]);
  const [answeredIds, setAnsweredIds] = useState([]);


  // here I want to load the questions and users
  useEffect( () => {
    _getUsers()
      .then(res => {

        // to avoid errors if the user is not authenticated... We must remove this later on!
        if(localStorage.getItem("authUser")) {
          console.log(res[JSON.parse(localStorage.getItem("authUser"))].questions)
          setAnsweredIds(res[JSON.parse(localStorage.getItem("authUser"))].questions)
        }

      })

    _getQuestions()
      .then(res => {
        answeredIds.forEach( item => {
          console.log(res[item]);
        })
      })

  })



  return (
    <div>
      <br />
      <Button label={"unanswered"} bgColor={"rgba(0,212,255,0.6)"}/>
      <Button label={"answered"}  color={"white"}/>
      <Questions />
    </div>
  )
}


export default withRouter(Logged);
