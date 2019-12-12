import React, { useState, useEffect } from 'react';
import './App.css';
import Appbar from "./components/Appbar";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import QuestionShow from "./containers/Questions/QuestionShow";
import QuestionShowResults from "./containers/Questions/QuestionShowResults";
import QuestionSubmit from "./containers/NewQuestion/QuestionSubmit";
import QuestionSubmitted from "./containers/NewQuestion/QuestionSubmitted";
import Checking from "./containers/Checking";
import StyledLink from "./components/StyledLink";
import Root from "./containers/Root";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion} from "./_DATA";



function App(props) {

  // install lifecycle hook
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

  // state for answered and unanswered questions
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  // input text in the logIn
  const [ signUpData, setSignUpData ] = useState(null);

  // state for user and questions
  const [questions, setQuestions] = useState(null);
  const [users, setUsers] = useState(null);


  // Here we load all the users and questions
  useEffect( () => {
    fetchingAndReloading();
  }, [])

  const fetchingAndReloading = () => {
    // localStorage.clear();
    const questionsAnsweredTemp = [];
    const questionsUnAnsweredTemp = [];
    const authUser = JSON.parse(localStorage.getItem("authUser"))

    _getUsers()
      .then(res => {
        setUsers(res);

        if ( JSON.parse(localStorage.getItem("authUser")) !== null ) {
          // setLoggedInStatus("LOGGED_IN");
          props.history.push("/questions") ;
          handleLogin();
        } else {
          // setLoggedInStatus("NOT_LOGGED_IN");
          props.history.push("/welcome") ;
          handleLogOut();
        }
        
      })

    _getQuestions()
      .then(res => {
        setQuestions(res);
        const arrayQuestions = Object.values(res);
        arrayQuestions.forEach( (item, index) => {
          // check if the author of this questions is the logged authors
          if (  (arrayQuestions[index].optionOne.votes.indexOf(authUser) >= 0) ||
                (arrayQuestions[index].optionTwo.votes.indexOf(authUser) >= 0) ) {
            questionsAnsweredTemp.push(item);
          } else {
            questionsUnAnsweredTemp.push(item);
          }
        })

        setAnsweredQuestions(questionsAnsweredTemp);
        setUnansweredQuestions(questionsUnAnsweredTemp);
        console.log(`Questions Answered: ${questionsAnsweredTemp}`);
        console.log(`Questions Unanswered: ${questionsUnAnsweredTemp}`);



      });



  }

  const handleLogin = (data) => {
    console.log(data);
    setLoggedInStatus("LOGGED_IN");
    props.history.push("/questions") ;
  }

  const handleLogOut = () => {
    localStorage.clear();
    console.log();
    setLoggedInStatus("NOT_LOGGED_IN");
    props.history.push("/welcome") //doing redirect here.
  }

  const saveQuestion = ({authedUser, qid, answer}) => {

    _saveQuestionAnswer ({  authedUser: authedUser,
                            qid: qid,
                            answer: answer} );

    fetchingAndReloading();
  }

  const submitQuestion = ({optionOneText, optionTwoText, author}) => {
    _saveQuestion({optionOneText, optionTwoText, author})
      .then( res => console.log(res))

    fetchingAndReloading();
  }

  const inputText = (text, elem ) => {

    const obj = {...signUpData}
    obj[elem] = text;
    setSignUpData(obj);
  }

  const checkIn = () => {

  }


  return (
    <div className="App">
    <Appbar loggedInStatus={loggedInStatus} handleLogOut={handleLogOut}/>

    <Switch>


      <Route
        exact
        path={"/welcome"}
        render = { props => (
          <Welcome {...props} checkIn={checkIn} users={users} loggedInStatus={loggedInStatus}/>
        )}
      />

      <Route
        exact
        path={"/questions/"}
        render = { props => (
          <Root loggedInStatus={loggedInStatus} answeredQuestions={answeredQuestions} unansweredQuestions={unansweredQuestions}/>
        )}
      />

      <Route
        path={"/signUp"}
        render = { props => (
          <SignUp inputText={inputText} loggedInStatus={loggedInStatus}/>
        )}
      />

      <Route
        path={"/newQuestion/submitted"}
        render = { props => (
          <QuestionSubmitted submitQuestion={submitQuestion} loggedInStatus={loggedInStatus}/>
        )}
      />

      <Route
        path={"/newQuestion"}
        render = { props => (
          <QuestionSubmit loggedInStatus={loggedInStatus}/>
        )}
      />

      <Route
        path={"/checking"}
        render = { props => (
          <Checking handleLogin={handleLogin} loggedInStatus={loggedInStatus}/>
        )}
      />

      <Route
        path={"/questions/:question_id/:answer"}
        render = { (props) => (
          <QuestionShowResults {...props} saveQuestion={saveQuestion} questions={questions} users={users} loggedInStatus={loggedInStatus} />
        )}
      />
      <Route
        path={"/questions/:question_id"}
        render = { (props) => (
          <QuestionShow {...props} questions={questions} users={users} loggedInStatus={loggedInStatus} />
        )}
      />
      </Switch>
    </div>
  );
}

export default withRouter(App);
