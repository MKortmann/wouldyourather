import React, { useState, useEffect } from 'react';
import './App.css';
import Appbar from "./components/Appbar";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import ShowQuestion from "./components/ShowQuestion";
import ShowQuestionResults from "./components/ShowQuestionResults";
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
    localStorage.clear();
    _getUsers()
      .then(res => {
        setUsers(res);
      })

    _getQuestions()
      .then( res => {
        setQuestions(res);
      })

  }, [])

  useEffect( () => {

    console.log(`[App.js]: use effect run`);

  })

  const handleLogin = (data) => {
    console.log(data);
    setLoggedInStatus("LOGGED_IN")
  }

  const handleLogOut = () => {
    console.log();
    setLoggedInStatus("NOT_LOGGED_IN");
    props.history.push("/") //doing redirect here.
  }

  return (
      <div className="App">
        <Route
          path={"/"}
          render = { props => (
            <Appbar loggedInStatus={loggedInStatus} handleLogOut={handleLogOut}/>
          )}/>
        <Switch>
        <Route
          exact
          path={"/"}
          render = { props => (
            <Welcome loggedInStatus={loggedInStatus}/>
          )}
        />
        <Route
          path={"/signUp"}
          render = { props => (
            <SignUp loggedInStatus={loggedInStatus}/>
          )}
        />
        <Route
          path={"/checking"}
          render = { props => (
            <Checking handleLogin={handleLogin} loggedInStatus={loggedInStatus}/>
          )}
        />
        <Route
          exact
          path={"/root/questions/"}
          render = { props => (
            <Root loggedInStatus={loggedInStatus}/>
          )}
        />
        <Route
          path={"/root/questions/:question_id/:answer"}
          render = { (props) => (
            <ShowQuestionResults {...props} questions={questions} user={users} loggedInStatus={loggedInStatus} />
          )}
        />
        <Route
          path={"/root/questions/:question_id"}
          render = { (props) => (
            <ShowQuestion {...props} questions={questions} user={users} loggedInStatus={loggedInStatus} />
          )}
        />
        </Switch>
      </div>
  );
}

export default withRouter(App);
