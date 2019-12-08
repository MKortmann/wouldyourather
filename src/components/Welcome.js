import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import { Link } from "react-router-dom";


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

export default function ServerModal(props) {
  const classes = useStyles();

  useEffect(() => {
    localStorage.clear();
  }, [])

  return (
    <div>
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
          <Link to="/checking" style={buttonStyle} >SignIn</Link>
          <Link to="/signUp" style={buttonStyle}>SignUp</Link>
        </div>
      </Modal>
    </div>
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
  "&:hover": {
    background: "rgba(255, 105, 135, .5)",
  },
  margin: "5px",
  marginBottom: "20px"
}
