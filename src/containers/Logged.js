import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';
import {_addUser,  _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";


const Logged = (props) => {

  const [authUser, setAuthUser] = useState("");

  // get the data from localStorage
  // useEffect(() => {
  //   const fullName = JSON.parse(localStorage.getItem("fullName"));
  //   const userName = JSON.parse(localStorage.getItem("userName"));
  //   const eMail = JSON.parse(localStorage.getItem("eMail"));
  //   const selectedUser = JSON.parse(localStorage.getItem("selectedUser"));
  //   const action = props.action;
  //
  //
  //   if(fullName !== null) {
  //     localStorage.clear();
  //     // let's add the user
  //     localStorage.setItem("authUser", JSON.stringify(fullName))
  //     // adding the user
  //     _addUser(fullName)
  //       .then(res => console.log(res));
  //     setAuthUser(fullName);
  //   } else if (selectedUser !== null){
  //     // let's set the auth. User
  //     localStorage.clear();
  //     localStorage.setItem("authUser", JSON.stringify(selectedUser))
  //     setAuthUser(fullName);
  //     handleSuccessfulAuth("ok");
  //
  //   } else {
  //     props.history.push("/") //doing redirect here.
  //   }
  // }, [])

  // useEffect( () => {
  //   console.log(`[Logged.js]: use effect run`);
  //
  // })

  // function handleSuccessfulAuth (status) {
  //   console.log(status);
  //   // props.history.push("/Logged") //doing redirect here.
  // }

  return (
    <div>
      <h1>You are logged as: {authUser} </h1>
      <h2>Status: {props.loggedInStatus} </h2>
    </div>
  )
}


export default withRouter(Logged);
