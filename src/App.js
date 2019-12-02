import React from 'react';
import './App.css';
import Appbar from "./components/Appbar";
import ModalInput from "./components/ModalInput";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {


  const componentModal = () => {
    return (
      <ModalInput />
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
