import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QuestionCard from "./QuestionCard";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  }
});

function Questions(props) {


  let componentQuestions = null;
  if (props.answeredQuestions !== undefined) {
    componentQuestions = (
      props.answeredQuestions.map((item, index) => {
        return(<QuestionCard key={item.id} item={item} users={props.users}/>)
      })
    )
  }


  const classes = useStyles();

  return (
    <React.Fragment>
      <Container >
      <div className={classes.root} component="div" style={{ backgroundColor: '#cfe8fc'}}>
      {componentQuestions}
      </div>
      </Container>
    </React.Fragment>
  );
}

export default Questions;
