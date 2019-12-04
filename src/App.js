import React, { useState, useEffect } from 'react';
import './App.css';
import Appbar from "./components/Appbar";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import Logged from "./components/Logged";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

function App() {

  // data get from SignIn (selected user)
  const [authUser, setAuthUser] = useState("");

  const userSelected = (user) => {
    // setAuthUser(user):  only if the object is mounted!
    if(user !== "") {
      setAuthUser(user);
    }
  }

  // // Data collected from SignUp
  // const [userData, setUserData] = useState({
  //   fullName: "",
  //   userName: "",
  //   eMail: ""
  // });
  //
  // const onChangeInputText = (text, elem) => {
  // // using destructuring
  // let obj = {...userData};
  // // setting the actual value in the correct key=elem
  // obj[elem] = text;
  // setUserData(obj);
  // }

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
      <Welcome select={userSelected} authUser={authUser}/>
    )
  }

  const logged = () => {
    return (
      <Logged authUser={authUser}/>
    )
  }

  const getValue = (value, elem) => {

    console.log(`${elem}: ${value}`);
  }

  const signUp = () => {
    return (
      <SignUp valueInput={getValue}/>
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
