import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from "./Input";
import Button from "./Button";

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

export default function ServerModal() {
  const classes = useStyles();
  const rootRef = React.useRef(null);

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
          <h2 id="server-modal-title">Welcome To Would You Rather</h2>
          <p id="server-modal-description">Please login to start to play</p>
          <Input label={"Please, enter your first name"}/>
          <Input label={"Please, enter your last name"}/>
          <Input label={"Please, enter your user name"}/>
          <Input label={"Please, enter your E-Mail"}/>
          <Button label={"play"}/>
        </div>
      </Modal>
    </div>
  );
}
