import React, { useState, useEffect } from 'react';
import './App.css';
import Appbar from "./components/Appbar";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import Checking from "./containers/Checking";
import Logged from "./containers/Logged";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA";


function App() {

  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");


  // Here we load all the users and questions
  useEffect( () => {
    // _saveQuestion({optionOneText: "use calm", optionTwoText: "use halb", author: "Marcelo"})
    // _getUsers()
    // .then(res => console.log(res))
    // _getQuestions()
    // .then(res => console.log(res))
    _saveQuestion({optionOneText: "use calm", optionTwoText: "use halb", author: "marcelo"})
    _saveQuestion({optionOneText: "use calm", optionTwoText: "use halb", author: "marcelo"})
    // _saveQuestion({optionOneText: "use calm", optionTwoText: "use halb", author: "marcelo"})
    // _saveQuestion({optionOneText: "use calm2", optionTwoText: "use halb2", author: "sarahedo"})
    // let's clear the localStorage
    localStorage.clear();

  }, [])

  useEffect( () => {


    console.log(`[App.js]: use effect run`);

  })




  const clickedBtnPlay = (userData) => {
    // debugger
    _getUsers()
    .then(res => console.log(res))
    _getQuestions()
    .then(res => console.log(res))
    console.log(userData);
    // debugger
  }

  const handleLogin = (data) => {
    debugger
    console.log(data);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Appbar />
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
          path={"/logged"}
          render = { props => (
            <Logged loggedInStatus={loggedInStatus}/>
          )}
        />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
