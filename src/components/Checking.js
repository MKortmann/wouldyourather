import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom';

const Checking = (props) => {

  // get the data from localStorage
  useEffect(() => {

    if(props.signUpData.fullName !== undefined) {
      props.handleLogin(props.signUpData.fullName, "signUp");
    } else if (props.signUpData.selectedUser !== undefined){
      props.handleLogin(props.signUpData.selectedUser, "logIn");
    } else {
      props.history.push("/Welcome") //doing redirect here.
    }
  }, [props])


  return (
    <React.Fragment>
    </React.Fragment>
  )
}


export default withRouter(Checking);
