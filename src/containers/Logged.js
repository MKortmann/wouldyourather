import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';


const Logged = (props) => {

  // get the data from localStorage
  useEffect(() => {
    const fullName = JSON.parse(localStorage.getItem("fullName"));
    const userName = JSON.parse(localStorage.getItem("userName"));
    const eMail = JSON.parse(localStorage.getItem("eMail"));
    const selectedUser = JSON.parse(localStorage.getItem("selectedUser"));
    const action = props.action;
    debugger

    if(fullName !== null) {
      // let's add the user
    } else if (selectedUser !== null){
      // let's laod the user content
    } else {
      props.history.push("/") //doing redirect here.
    }
  }, [])


  return (
    <div>
      <h1>You are logged as: {props.authUser} </h1>
    </div>
  )
}


export default withRouter(Logged);
