import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Question from "./QuestionCard"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  }
});

export default function Questions(props) {


  let componentQuestions = null;
  if (props.answeredQuestions !== undefined) {
    componentQuestions = (
      props.answeredQuestions.map((item, index) => {
        return(<Question key={item.id} item={item} users={props.users}/>)
      })
    )
  }


  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
      <div className={classes.root} component="div" style={{ backgroundColor: '#cfe8fc'}}>
      {componentQuestions}
      </div>
      </Container>
    </React.Fragment>
  );
}
