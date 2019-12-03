import React from "react";



const Logged = (props) => {
  return (
    <div>
      <h1>You are logged as: {props.authUser} </h1>
    </div>
  )
}


export default Logged;
