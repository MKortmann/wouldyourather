import React, { useEffect } from "react";
import StyledLink from "../../components/StyledLink";


function Submitted (props) {

  useEffect( () => {
    props.submitQuestion();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ])

  return (
    <div>
      <h1>Congratulations!!! Question Submitted</h1>
      <StyledLink to={"/questions"} label={"Back"}></StyledLink>
    </div>
  )
}

export default Submitted;
