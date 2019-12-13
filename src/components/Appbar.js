import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MKLogo from '../icons/mk.svg';
// import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";

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
            <StyledLink to="/questions" label={"Home"} />
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.tab}>
            <StyledLink to="/newQuestion" label={"New Question"} bgColor={"black"}/>
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
