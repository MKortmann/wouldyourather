import React, { useState, useEffect } from 'react';
import './App.css';
import Appbar from "./components/Appbar";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import Questions from "./containers/Questions/Questions";
import QuestionShow from "./containers/Questions/QuestionShow";
import QuestionShowResults from "./containers/Questions/QuestionShowResults";
import QuestionSubmit from "./containers/NewQuestion/QuestionSubmit";
import QuestionSubmitted from "./containers/NewQuestion/QuestionSubmitted";
import Leaderboard from "./components/Leaderboard";
import Checking from "./components/Checking";
import NotFound from "./components/NotFound";
import Spinner from "./components/Spinner";
import { Switch, Route, Redirect } from "react-router-dom";

import { withRouter } from 'react-router-dom';
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion} from "./_DATA";


function App(props) {

  // used to track not only if the user is logged but also which user is logged!
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

  // state for answered and unanswered questions
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  // input text in the logIn
  const [ signUpData, setSignUpData ] = useState(null);

  // state for user and questions
  const [questions, setQuestions] = useState(null);
  const [users, setUsers] = useState(null);

  // state for save the first and second question
  const [newQuestion, setNewQuestion] = useState(null);


  // Here we load all the users and questions
  useEffect( () => {
    fetchingAndReloading();
  }, [ ])

  const fetchingAndReloading = ( toDo, toDo2 = "false" ) => {
    // localStorage.clear();
    const questionsAnsweredTemp = [];
    const questionsUnAnsweredTemp = [];
    const questionsAnsweredTempOrd = [];
    const questionsUnAnsweredTempOrd = [];

    _getUsers()
      .then(res => {
        setUsers(res);
      })

    _getQuestions()
      .then(res => {
        setQuestions(res);
        const arrayQuestions = Object.values(res);

        if ( signUpData ) {

          if (toDo2 === "logIn" || (toDo2 === "stayAtThisPage" && signUpData.selectedUser) ) {
            arrayQuestions.forEach( (item, index) => {
              // check if the author of this questions is the logged authors
              if (  ( arrayQuestions[index].optionOne.votes.indexOf(signUpData.selectedUser)  >= 0 ) ||
                    ( arrayQuestions[index].optionTwo.votes.indexOf(signUpData.selectedUser) >= 0 ) ) {
                questionsAnsweredTemp.push(item);
              } else {
                questionsUnAnsweredTemp.push(item);
              }
            })
          } else {
            arrayQuestions.forEach( (item, index) => {
              // check if the author of this questions is the logged authors
              if (  ( arrayQuestions[index].optionOne.votes.indexOf(signUpData.fullName)  >= 0 ) ||
                    ( arrayQuestions[index].optionTwo.votes.indexOf(signUpData.fullName) >= 0 ) ) {
                questionsAnsweredTemp.push(item);
              } else {
                questionsUnAnsweredTemp.push(item);
              }
            })
          }

        // we have to reorganize the questions in order of the newest to the oldest
        let rowsSorted = [];
        let timeStamps = [];
        questionsAnsweredTemp.forEach( (item, index) => {
          timeStamps.push(item.timestamp);
        })

        // here we have to sort the values in accord with the size of the total points.
        for ( let i = timeStamps.length; i > 0; i--) {
          let index = timeStamps.indexOf(Math.max(...timeStamps));
          rowsSorted.push(questionsAnsweredTemp[index]);
          timeStamps.splice(index, 1);
          questionsAnsweredTemp.splice(index, 1);
        }

        setAnsweredQuestions(rowsSorted);

        // we have to reorganize the questions in order of the newest to the oldest
        rowsSorted = [];
        timeStamps = [];
        questionsUnAnsweredTemp.forEach( (item, index) => {
          timeStamps.push(item.timestamp);
        })

        // here we have to sort the values in accord with the size of the total points.
        for ( let i = timeStamps.length; i > 0; i--) {
          let index = timeStamps.indexOf(Math.max(...timeStamps));
          rowsSorted.push(questionsUnAnsweredTemp[index]);
          timeStamps.splice(index, 1);
          questionsUnAnsweredTemp.splice(index, 1);
        }

        setUnansweredQuestions(rowsSorted);
      }

      // Important to check if the user is logged, or has already select or add a new user
      //  stayAtThisPage is important to show the user that he should stay at the
      // page after looking the questions of posted a question.
      if (toDo2 !== "stayAtThisPage") {
        if ( (loggedInStatus !== "NOT_LOGGED_IN") ||  signUpData) {
          props.history.push("/questions");
        } else  {
          props.history.push("/welcome") ;
        }
      }

      });

  }

  const handleLogin = (toDo, toDo2) => {
    setLoggedInStatus(toDo);
    fetchingAndReloading(toDo, toDo2);
  }

  const handleLogOut = () => {
    setLoggedInStatus("NOT_LOGGED_IN");
    props.history.push("/welcome") //doing redirect here.
  }

  const saveQuestion = ({authedUser, qid, answer}) => {

    _saveQuestionAnswer ({  authedUser: authedUser,
                            qid: qid,
                            answer: answer} );

    fetchingAndReloading(authedUser, "stayAtThisPage");
  }

  const submitQuestion = () => {
    // {optionOneText, optionTwoText, author}

    const optionOneText = newQuestion.firstOption;
    const optionTwoText = newQuestion.secondOption;
    const author = loggedInStatus;

    _saveQuestion({optionOneText, optionTwoText, author})
      .then( res => console.log(res))

    fetchingAndReloading(author, "stayAtThisPage");
  }

  // used to the SignUP
  const inputText = (text, elem ) => {
    if ( (elem !== "firstOption") && elem !== "secondOption") {
      const obj = {...signUpData}
      obj[elem] = text;
      setSignUpData(obj);
    } else {
      const objTemp = {...newQuestion}
      objTemp[elem] = text;
      setNewQuestion(objTemp);
    }

    // elem === "fullName" ?  setUser(test) : null
  }

  const checkIn = (selectedUser) => {
    const obj = {...signUpData}
    obj["selectedUser"] = selectedUser;
    setSignUpData(obj);
    setLoggedInStatus(selectedUser);
  }

  return (
    <div className="App">
    <Appbar loggedInStatus={loggedInStatus} handleLogOut={handleLogOut}/>

    <Switch>

      <Route
        exact
        path={"/welcome"}
        render = { props => (
          <Welcome {...props} checkIn={checkIn} users={users} />
        )}
      />

      <Route
        exact
        path={"/leaderboard"}
        render = { props => (
          <Leaderboard {...props} questions={questions} users={users} user={loggedInStatus} />
        )}
      />

      <Route
        exact
        path={"/questions"}
        render = { props => (
          <Questions answeredQuestions={answeredQuestions} unansweredQuestions={unansweredQuestions}/>
        )}
      />

      <Route
        path={"/signUp"}
        render = { props => (
          <SignUp inputText={inputText} />
        )}
      />

      <Route
        path={"/newQuestion/submitted"}
        render = { props => (
          <QuestionSubmitted submitQuestion={submitQuestion} />
        )}
      />

      <Route
        path={"/newQuestion"}
        render = { props => (
          <QuestionSubmit inputText={inputText} />
        )}
      />

      <Route
        path={"/checking"}
        render = { props => (
          <Checking handleLogin={handleLogin} signUpData={signUpData} />
        )}
      />

      <Route
        path={"/questions/:question_id/:answer"}
        render = { (props) => (
          <QuestionShowResults {...props} saveQuestion={saveQuestion} questions={questions} users={users} user={loggedInStatus} />
        )}
      />
      <Route
        path={"/questions/:question_id"}
        render = { (props) => (
          <QuestionShow {...props} questions={questions} users={users} user={loggedInStatus} />
        )}
      />

      <Route
        path={"/questions/"}
        render = { (props) => (
          <NotFound  />
        )}
      />

      <Route
        exact
        path={"/"}
        render = { (props) => (
          <Spinner  />
        )}
      />

      <Route
        path={"*"}
        render = { (props) => (
          <NotFound  />
        )}
      />
      </Switch>
    </div>
  );
}

export default withRouter(App);
