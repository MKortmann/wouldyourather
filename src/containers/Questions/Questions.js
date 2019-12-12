import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QuestionCard from "./QuestionCard";
import Container from '@material-ui/core/Container';
import Button from "../../components/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  }
});

function Questions(props) {

  const [ answeredQuestionsShowFlag, setAnsweredQuestionsShowFlag ] = useState(false);


  const handleClickShowFlag = () => {
    setAnsweredQuestionsShowFlag(false);
  }
  const handleClickNotShowFlag = () => {
    setAnsweredQuestionsShowFlag(true);
  }

  let componentQuestions = null;
    if (answeredQuestionsShowFlag === true && props.answeredQuestions !== undefined) {
      componentQuestions = (
        props.answeredQuestions.map((item, index) => {
          return(<QuestionCard key={item.id} item={item} users={props.users}/>)
        })
      )
    } else if ( answeredQuestionsShowFlag === false && props.unansweredQuestions !== undefined ) {
      componentQuestions = (
        props.unansweredQuestions.map((item, index) => {
          return(<QuestionCard key={item.id} item={item} users={props.users}/>)
        })
      )
    }

  let componentToRender = null;
  if (answeredQuestionsShowFlag === true) {
    componentToRender = (
      <div>
        <br/>
        <Button clicked={handleClickShowFlag} label={"unanswered"} color={"white"}/>
        <Button clicked={handleClickNotShowFlag} label={"answered"} bgColor={"rgba(0,212,255,0.6)"} />
      </div>
    )
  } else {
    componentToRender = (
      <div>
        <br/>
        <Button clicked={handleClickShowFlag} label={"unanswered"}  bgColor={"rgba(0,212,255,0.6)"} />
        <Button clicked={handleClickNotShowFlag} label={"answered"} color={"white"}/>
      </div>
    )
  }

  const classes = useStyles();

  return (
    <Container >
      { componentToRender }
      <div className={classes.root} style={{ backgroundColor: '#cfe8fc'}}>
      { componentQuestions }
      </div>
    </Container>
  );
}

export default Questions;
