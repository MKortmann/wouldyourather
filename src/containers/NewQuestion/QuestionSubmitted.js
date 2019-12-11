import React, { useEffect } from "react";
import { _saveQuestion } from "../../_DATA";
import StyledLink from "../../components/StyledLink";


function Submitted (props) {

  useEffect( () => {
    const optionOneText = JSON.parse(localStorage.getItem("firstOption"));
    const optionTwoText = JSON.parse(localStorage.getItem("secondOption"));
    const author = JSON.parse(localStorage.getItem("authUser"));
    // { optionOneText, optionTwoText, author })

    _saveQuestion({optionOneText, optionTwoText, author})
      .then( res => console.log(res))

  }, [])



  return (
    <div>
      <h1>Congratularions!!! Question Submitted</h1>
      <StyledLink to={"/"} label={"Back"}></StyledLink>
    </div>
  )
}

export default Submitted;
