import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Question from "../components/SingleQuestion"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  }
});

export default function Questions(props) {



  useEffect( () => {

    console.log(`[Questions]: ${props.answeredQuestions}`);
    console.log(`[Not Answered Questions]: ${props.unansweredQuestions}`);

  }, [])


  let componentQuestions = null;
  if (props.answeredQuestionsShowFlag === true) {
    componentQuestions = (
        props.answeredQuestions.map((item, index) => {
          return(<Question />)
        })
    )
  } else {
    componentQuestions = (
        props.unansweredQuestions.map((item, index) => {
          return(<Question />)
        })
    )
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
      <div className={classes.root} component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh'}}>
      {componentQuestions}

      </div>
      </Container>
    </React.Fragment>
  );
}
