import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import StyledLink from "../../components/StyledLink";

function QuestionCard(props) {

  // converting timestamp to date
  let ts = new Date(props.item.timestamp);

  let componentCard = (
    <Container>
      <Paper style={{padding: "10px", marginTop: "10px"}}>
          <div>
            <p style={{color: "rgba(255, 105, 135)"}}>Author: {props.item.author}</p>
            <p>Time: {ts.toDateString()}</p>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Would You Rather...
            </Typography>
          <div color="textSecondary" style={{backgroundColor: "lightblue"}}>
            <p style={{opacity: "0.5", transform: "scale(-1,1)"}}>{props.item.optionOne.text}{props.item.optionOne.text}{props.item.optionOne.text}</p>
            <p style={{opacity: "0.5", transform: "scale(-1,1)"}}>{props.item.optionTwo.text}{props.item.optionTwo.text}{props.item.optionTwo.text}</p>
          </div>
      </Paper>
    </Container>
  )

  return (
    <React.Fragment>
      { componentCard }
      { props.answered !== true ?
        <StyledLink to={`/questions/${props.item.id}`} label={"View Question"}/>
        :
        <StyledLink to={`/questions/${props.item.id}/${"voted"}`} label={"View Answers"}></StyledLink>
      }
    </React.Fragment>
  );
}

export default QuestionCard;
