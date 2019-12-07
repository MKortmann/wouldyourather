import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SVGtylermcginnis from "../avatars/tylermcginnis.svg";
import SVGsarahedo from "../avatars/sarahedo.svg";
import SVGjohndoe from "../avatars/johndoe.svg";
import SVGmarcelo from "../avatars/johndoe.svg";

const ShowQuestion = (props) => {

  const useStyles = makeStyles({
    card: {
      margin: "30px",
      minHeight: "250px",
      minWidth: "320px"
    },
  });

  const classes = useStyles();


  let componentAvatar = "";

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

  const componentCard = (
    <Card className={classes.card}>
      <CardActionArea style={{cursor: "pointer"}}>
        <div>
          <img style={{maxWidth: "96px"}} src={componentAvatar} alt={"Avatar Logo"}/>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Would You Rather...
          </Typography>
          <div>
            <p>{props.questions[props.match.params.question_id].optionOne.text}</p>
            <p>{props.questions[props.match.params.question_id].optionTwo.text}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )


  return (
    <React.Fragment>
      {componentCard}

    </React.Fragment>
  )
}

export default ShowQuestion;
