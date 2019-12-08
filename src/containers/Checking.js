import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';
import {_addUser,  _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";
import Spinner from "../components/Spinner"


const Checking = (props) => {

  const [authUser, setAuthUser] = useState("");

  // get the data from localStorage
  useEffect(() => {

    const fullName = JSON.parse(localStorage.getItem("fullName"));
    const userName = JSON.parse(localStorage.getItem("userName"));
    const eMail = JSON.parse(localStorage.getItem("eMail"));
    const selectedUser = JSON.parse(localStorage.getItem("selectedUser"));
    const action = props.action;


    if(fullName !== null) {
      localStorage.clear();
      // let's add the user
      localStorage.setItem("authUser", JSON.stringify(fullName))
      // adding the user
      _addUser(fullName)
        .then(res => console.log(res));
      setAuthUser(fullName);
      handleSuccessfulAuth("ok");
    } else if (selectedUser !== null){
      // let's set the auth. User
      localStorage.clear();
      localStorage.setItem("authUser", JSON.stringify(selectedUser))
      setAuthUser(selectedUser);
      handleSuccessfulAuth("ok");

    } else {
      props.history.push("/") //doing redirect here.
    }
  }, [])

  // useEffect( () => {
  //   console.log(`[Logged.js]: use effect run`);
  //
  // })

  function handleSuccessfulAuth (status) {

    console.log(status);
    props.handleLogin("LOGGED_IN")
    setTimeout(() => {
      props.history.push("/questions") //doing redirect here.
    }, 200)


  }

  return (
    <Spinner />
  )
}


export default withRouter(Checking);
