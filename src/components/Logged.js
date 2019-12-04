import React, {useEffect} from "react";



const Logged = (props) => {


  useEffect( () => {
    debugger
    console.log(props.match.params.data);
  })


  return (
    <div>
      <h1>You are logged as: {props.authUser} </h1>
    </div>
  )
}


export default Logged;
