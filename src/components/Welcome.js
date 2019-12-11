import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import { Link } from "react-router-dom";
// used for inline style ()
// import Radium, { StyleRoot } from "radium";
// var RadiumLink = Radium(Link);
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    flexGrow: 1,
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
// stopped at class 72
const StyledLink = styled(Link)`
  background: rgba(0,212,255,0.6);
  border: 0;
  color: black;
  height: 48;
  padding: 10;
  textDecoration: none;
  &:hover {
    background-color: rgba(255, 105, 135, .5);
    color: white
  },
  `;

  const StyledButton = styled(Button)`
    color: black;
    font-weight: bold;
    &:hover {
      background-color: rgba(255, 105, 135, .5),
      color: white
    },
    `;

function Welcome(props) {
  const classes = useStyles();



  useEffect(() => {
    localStorage.clear();
  }, [])

  return (
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
      >
        <div className={classes.paper}>
          <h2 id="server-modal-title">Welcome To Would You Rather</h2>
          <Select select={props.select} authUser={props.authUser}/>
          <hr/><br/>

            <StyledLink to="/checking" >SignInXXXXXXXXXXXXXX</StyledLink>

            <Link to="/signUp" style={buttonStyle}>SignUp</Link>

            <p style={buttonStyle}>Hello World</p>

            <StyledButton>Hello World</StyledButton>
        </div>
      </Modal>
  );
}

const buttonStyle = {
  background: 'rgba(0,212,255,0.6)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'black',
  height: 48,
  padding: 10,
  textDecoration: "none",
  ":hover": {
    backgroundColor: "rgba(255, 105, 135, .5)",
    color: "white"
  },
  margin: "5px",
  marginBottom: "20px"
}

export default Welcome;
