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
import Root from "./containers/Root";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { _getUsers, _getQuestions} from "./_DATA";



function App(props) {

  // install lifecycle hook
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

  // state for user and questions
  const [questions, setQuestions] = useState(null);
  const [users, setUsers] = useState(null);

  // Here we load all the users and questions
  useEffect( () => {
    // localStorage.clear();
    _getUsers()
      .then(res => {
        setUsers(res);
      })

    _getQuestions()
      .then( res => {
        setQuestions(res);
      })

    if ( JSON.parse(localStorage.getItem("authUser")) !== null ) {
      setLoggedInStatus("LOGGED_IN");
      props.history.push("/questions") ;
    } else {
      setLoggedInStatus("NOT_LOGGED_IN");
      props.history.push("/welcome") ;
    }

  }, [])

  const handleLogin = (data) => {
    console.log(data);
    setLoggedInStatus("LOGGED_IN");
    props.history.push("/checking") ;
  }

  const handleLogOut = () => {
    console.log();
    setLoggedInStatus("NOT_LOGGED_IN");
    props.history.push("/welcome") //doing redirect here.
  }

  return (
    <div className="App">
    <Appbar loggedInStatus={loggedInStatus} handleLogOut={handleLogOut}/>

    <Switch>

      <Route
        exact
        path={"/welcome"}
        render = { props => (
          <Welcome loggedInStatus={loggedInStatus}/>
        )}
      />

      <Route
        exact
        path={"/questions/"}
        render = { props => (
          <Root loggedInStatus={loggedInStatus}/>
        )}
      />

      <Route
        path={"/signUp"}
        render = { props => (
          <SignUp loggedInStatus={loggedInStatus}/>
        )}
      />

      <Route
        path={"/newQuestion/submitted"}
        render = { props => (
          <QuestionSubmitted loggedInStatus={loggedInStatus}/>
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
          <QuestionShowResults {...props} questions={questions} user={users} loggedInStatus={loggedInStatus} />
        )}
      />
      <Route
        path={"/questions/:question_id"}
        render = { (props) => (
          <QuestionShow {...props} questions={questions} user={users} loggedInStatus={loggedInStatus} />
        )}
      />
      </Switch>
    </div>
  );
}

export default withRouter(App);
