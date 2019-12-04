import React, { useState, useEffect } from 'react';
import './App.css';
import Appbar from "./components/Appbar";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import Logged from "./containers/Logged";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

function App() {

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


  const clickedBtnPlay = (userData) => {
    // debugger
    _getUsers()
    .then(res => console.log(res))
    _getQuestions()
    .then(res => console.log(res))
    console.log(userData);
    // debugger
  }



  const componentModal = () => {
    return (
      <Welcome />
    )
  }

  const logged = () => {
    return (
      <Logged />
    )
  }

  const signUp = () => {
    return (
      <SignUp />
    )
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Appbar />
        <Switch>
          <Route path="/" exact component={componentModal} />
          <Route path="/logged/" component={logged} />
          <Route path="/signUp" component={signUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
