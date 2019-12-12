import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';
import {_addUser,  _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";
import Spinner from "../components/Spinner"


const Checking = (props) => {

  // get the data from localStorage
  useEffect(() => {

    if(props.signUpData.fullName !== undefined) {
      // adding the user
      _addUser(props.signUpData.fullName)
      props.handleLogin("signUp");
    } else if (props.signUpData.selectedUser !== undefined){
      props.handleLogin("logIn");
    } else {
      props.history.push("/Welcome") //doing redirect here.
    }
  }, [])


  return (
    <React.Fragment>
    </React.Fragment>
  )
}


export default withRouter(Checking);
