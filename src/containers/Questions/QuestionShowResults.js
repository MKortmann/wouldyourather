import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SVGtylermcginnis from "../../avatars/tylermcginnis.svg";
import SVGsarahedo from "../../avatars/sarahedo.svg";
import SVGjohndoe from "../../avatars/johndoe.svg";
import SVGmarcelo from "../../avatars/johndoe.svg";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from "../../components/Button";
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { _saveQuestionAnswer} from "../../_DATA";
import Container from '@material-ui/core/Container';

const QuestionShowResults = (props) => {

  const useStyles = makeStyles({
    card: {
      margin: "30px",
      minHeight: "250px",
      minWidth: "320px",
    }
  });

  const classes = useStyles();

  const [state, setState] = useState({
    checkedA: false,
    checkedB: false
  });

  const [votes, setVotes] = useState({
    totalNumberOfVotes: 0,
    numberOfVotesOfOptionOne: 0,
    numberOfVotesOfOptionTwo: 0
  });

  useEffect( () => {
    let totalNumberOfVotes = 0;
    let numberOfVotesOfOptionOne = 0;
    let numberOfVotesOfOptionTwo = 0;


    if (props.questions !== null) {
      let option = "optionOne";
      switch (props.match.params.answer) {
        case props.questions[props.match.params.question_id].optionOne.text:
        setState({checkedA: true, checkedB: false});
        // GET THE NUMBER OF VOTES OF OPTION ONE
        numberOfVotesOfOptionOne = props.questions[props.match.params.question_id].optionOne.votes.length + 1;
        numberOfVotesOfOptionTwo = props.questions[props.match.params.question_id].optionTwo.votes.length ;
        break;

        case props.questions[props.match.params.question_id].optionTwo.text:
        setState({checkedA: false, checkedB: true});
        option = "optionTwo"
        // GET THE NUMBER OF VOTES OF OPTION TWO
        numberOfVotesOfOptionTwo = props.questions[props.match.params.question_id].optionTwo.votes.length + 1;
        numberOfVotesOfOptionOne = props.questions[props.match.params.question_id].optionOne.votes.length;
        break;

        default:
        setState({checkedA: true, checkedB: false});
        break;
      }

      // SAVING THE QUESTION
      // _saveQuestionAnswer ({ authedUser, qid, answer }) {

      // _saveQuestionAnswer ({  authedUser: props.questions[props.match.params.question_id].author,
      //                         qid: props.match.params.question_id,
      //                         answer: option} );
      _saveQuestionAnswer ({  authedUser: JSON.parse(localStorage.getItem("authUser")),
                              qid: props.match.params.question_id,
                              answer: option} );
      // GET THE TOTAL NUMBER OF Votes
      const totalNumberOfVotes = numberOfVotesOfOptionOne + numberOfVotesOfOptionTwo;

      setVotes ({
        totalNumberOfVotes: totalNumberOfVotes,
        numberOfVotesOfOptionOne: numberOfVotesOfOptionOne,
        numberOfVotesOfOptionTwo: numberOfVotesOfOptionTwo
      });

    }
  }, [])


  let componentAvatar = "";
  let componentCard = "";

  if (props.questions !== null) {
    switch (props.questions[props.match.params.question_id].author) {
      case "sarahedo":
        componentAvatar = SVGsarahedo;
      break;
      case "tylermcginnis":
        componentAvatar = SVGtylermcginnis;
      break;
      case "johndoe":
        componentAvatar = SVGjohndoe;
      break;
      default:
        componentAvatar = SVGmarcelo;
    }

    componentCard = (
      <Card className={classes.card}>
          <img style={{maxWidth: "96px"}} src={componentAvatar} alt={"Avatar Logo"}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Votes
            </Typography>
            <hr />
            <Grid container spacing={3}>
              <Grid item xs={1}  >
                <Checkbox
                  color="primary"
                  checked={state.checkedA}
                  value="checkedA"
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                />
              </Grid>
              <Grid item xs={5} style={{textAlign: "left", marginTop: "8px"}}>
                {props.questions[props.match.params.question_id].optionOne.text}
              </Grid>
              <Grid item xs={4}>
                <LinearProgress variant="determinate" value={(votes.numberOfVotesOfOptionOne/votes.totalNumberOfVotes)*100}  style={{marginTop: "16px"}} />
              </Grid>
              <Grid item xs={2} style={{marginTop: "6px"}}>
                {votes.numberOfVotesOfOptionOne} from {votes.totalNumberOfVotes}
              </Grid>
              <Grid item xs={1} >
                <Checkbox
                  checked={state.checkedB}
                  value="checkedB"
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                />
              </Grid>
              <Grid item xs={5} style={{textAlign: "left", marginTop: "8px"}}>
                {props.questions[props.match.params.question_id].optionTwo.text}
              </Grid>
              <Grid item xs={4}>
                <LinearProgress variant="determinate" color="secondary" value={(votes.numberOfVotesOfOptionTwo/votes.totalNumberOfVotes)*100} style={{marginTop: "16px"}}/>
              </Grid>
              <Grid item xs={2} style={{marginTop: "6px"}}>
                {votes.numberOfVotesOfOptionTwo} from {votes.totalNumberOfVotes}
              </Grid>
            </Grid>
          </CardContent>
      </Card>
    )
  }

  return (
    <Container style={{marginTop: "20px"}}>
      <div className={classes.root} style={{ backgroundColor: '#cfe8fc', paddingTop: "10px", paddingBottom: "30px"}}>
        {componentCard}
        <Link to={`/questions/`} style={buttonStyle}>Back</Link>
      </div>
    </Container>
  )
}

const buttonStyle = {
  background: 'rgba(0,212,255,0.6)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'black',
  height: 48,
  padding: 10,
  textDecoration: "none",
  "&:hover": {
    background: "rgba(255, 105, 135, .5)",
  },
  margin: "5px",
  marginBottom: "20px"
}

export default QuestionShowResults;
