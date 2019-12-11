import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import StyledLink from "../../components/StyledLink";

const useStyles = makeStyles({

});

function QuestionCard(props) {
  const classes = useStyles();
  // const [showCard, setShowCard] = useState(false);

  // converting timestamp to date
  const data = props.item.timestamp;
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
      <StyledLink to={`/questions/${props.item.id}`} label={"View Question"}/>
    </React.Fragment>
  );
}

export default QuestionCard;
