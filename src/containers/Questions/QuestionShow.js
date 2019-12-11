import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SVGtylermcginnis from "../../avatars/tylermcginnis.svg";
import SVGsarahedo from "../../avatars/sarahedo.svg";
import SVGjohndoe from "../../avatars/johndoe.svg";
import SVGmarcelo from "../../avatars/johndoe.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


  //  MAYBE WE NEED TO GET ALL THE QUESTIONS AGAIN... I think it will not update...
  // TO BE CHECKED!
  const useStyles = makeStyles({
    card: {
      margin: "30px",
      minHeight: "250px",
      minWidth: "320px",
    },
  });


  const QuestionShow = (props) => {

  const classes = useStyles();

  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };


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
              {props.questions[props.match.params.question_id].author}
          </Typography>
          <hr />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend"> <h2>Would You Rather...</h2></FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel
                control={<Radio color="primary"/>}
                value={props.questions[props.match.params.question_id].optionOne.text}
                label={props.questions[props.match.params.question_id].optionOne.text} />
              <FormControlLabel
                control={<Radio />}
                value={props.questions[props.match.params.question_id].optionTwo.text}
                label={props.questions[props.match.params.question_id].optionTwo.text} />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    )
  }

  return (
    <Container style={{marginTop: "20px"}}>
    <div className={classes.root} style={{ backgroundColor: '#cfe8fc', paddingTop: "10px", paddingBottom: "30px"}}>
      {componentCard}
      <Link to={`/questions/${props.match.params.question_id}/${value}`} style={buttonStyle}>Vote</Link>
    </div>
    </Container>

  )
}

export default QuestionShow;

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
