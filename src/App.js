import React, { useState, useEffect } from 'react';
import './App.css';
import Appbar from "./components/Appbar";
import ModalInput from "./components/ModalInput";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

function App() {

  useEffect( ()=> {
    // _saveQuestion({optionOneText: "use calm", optionTwoText: "use halb", author: "Marcelo"})
    // _getUsers()
    // .then(res => console.log(res))
    // _getQuestions()
    // .then(res => console.log(res))
    _saveQuestion({optionOneText: "use calm", optionTwoText: "use halb", author: "marcelo"})
    _saveQuestion({optionOneText: "use calm", optionTwoText: "use halb", author: "marcelo"})
    // _saveQuestion({optionOneText: "use calm", optionTwoText: "use halb", author: "marcelo"})
    // _saveQuestion({optionOneText: "use calm2", optionTwoText: "use halb2", author: "sarahedo"})

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
      <ModalInput clickedBtnPlay={clickedBtnPlay}/>
    )
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Appbar />
        <Route path="/" exact component={componentModal} />
      </div>
    </BrowserRouter>
  );
}

export default App;
