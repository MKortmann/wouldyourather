import React, { useEffect } from "react";
import StyledLink from "../../components/StyledLink";


function Submitted (props) {

  useEffect( () => {
    // const optionOneText = JSON.parse(localStorage.getItem("firstOption"));
    // const optionTwoText = JSON.parse(localStorage.getItem("secondOption"));
    // const author = JSON.parse(localStorage.getItem("authUser"));
    // { optionOneText, optionTwoText, author })

    // _saveQuestion({optionOneText, optionTwoText, author})
    //   .then( res => console.log(res))

    props.submitQuestion();

  }, [])



  return (
    <div>
      <h1>Congratularions!!! Question Submitted</h1>
      <StyledLink to={"/questions"} label={"Back"}></StyledLink>
    </div>
  )
}

export default Submitted;
