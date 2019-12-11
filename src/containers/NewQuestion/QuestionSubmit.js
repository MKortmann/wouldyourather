import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from "../../components/Input";
import Button from "../../components/Button";
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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function QuestionSubmit (props) {
  const classes = useStyles();
  const rootRef = React.useRef(null);

  useEffect(() => {
    localStorage.clear();
  }, [])

  return (
    <div className={classes.root} ref={rootRef}>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <div className={classes.paper}>
          <h2 id="server-modal-title">Would You Rather...</h2>
          <p id="server-modal-description">Please, fill out the two possible options bellow!</p>
          <Input label={"First Option"} />
          <Input label={"Second Option"} />
          <Link to="/questions/submit"  style={buttonStyle}>Submit Question</Link>
          <Link to="/questions/"  style={buttonStyle}>Back</Link>
        </div>
      </Modal>
    </div>
  );
}

export default QuestionSubmit;

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
