import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';
import {_addUser,  _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";
import Questions from "./Questions";
import Button from "../components/Button";


const Logged = (props) => {




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
