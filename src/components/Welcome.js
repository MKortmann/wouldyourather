import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import StyledLink from "./StyledLink";

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
        <StyledLink to="/checking" label={"SignIn"}/>
        <StyledLink to="/signUp" label={"SignUp"}/>
    </div>
    </Modal>
  );
}


export default Welcome;
