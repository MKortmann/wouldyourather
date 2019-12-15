import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { _addUser } from "../_DATA";

const Checking = (props) => {

  // get the data from localStorage
  useEffect(() => {

    if(props.signUpData.fullName !== undefined) {
      // adding the user
      _addUser(props.signUpData.fullName)
      props.handleLogin(props.signUpData.fullName);
    } else if (props.signUpData.selectedUser !== undefined){
      props.handleLogin(props.signUpData.selectedUser);
    } else {
      props.history.push("/Welcome") //doing redirect here.
    }
  }, [ ])


  return (
    <React.Fragment>
    </React.Fragment>
  )
}


export default withRouter(Checking);
