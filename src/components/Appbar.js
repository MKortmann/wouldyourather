import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MKLogo from '../icons/mk.svg';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'rgba(0,212,255,0.8)'
  },
  tab: {
    marginRight: theme.spacing(2),
    marginLeft: "20px",
    cursor: "pointer"
  },
  login: {
    flexGrow: 1,
    textAlign: "right",
    cursor: "pointer",
    marginLeft: 0,
    paddingLeft: 0
  },
}));

export default function DenseAppBar(props) {
  const classes = useStyles();

  let  componentToRender = (
      <React.Fragment>
        <Typography variant="h6" color="inherit" className={classes.tab} >
          Welcome to Would You Rather
        </Typography>
      </React.Fragment>
    )


  if ( props.loggedInStatus === "LOGGED_IN")  {
    componentToRender = (
        <React.Fragment>
          <Typography variant="h6" color="inherit" className={classes.tab} >
            Home
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.tab}>
            <Link to="/newQuestion" style={{textDecoration: "none", color: "white"}}>New Question</Link>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.tab}  >
            Leaderboard
          </Typography>
          <Typography variant="h6" color="inherit"  className={classes.login}>
            <span> Welcome {JSON.parse(localStorage.getItem("authUser"))} </span>
            <span onClick={props.handleLogOut}>SignOut</span>
          </Typography>
        </React.Fragment>
      )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.root}>
            <img src={MKLogo} alt="MK-Logo" />
            {componentToRender}
        </Toolbar>
      </AppBar>
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
