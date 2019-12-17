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
  signOut: {
    background: "rgba(13,186,240,0.8)",
    border: 0,
    color: "white",
    height: 48,
    "&:hover": {
      background: "rgba(255, 105, 135, .5)",
    },
    margin: "10px",
    padding: "10px"
  }
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


  if ( props.loggedInStatus !== "NOT_LOGGED_IN")  {
    componentToRender = (
        <React.Fragment>
          <Typography variant="h6" color="inherit" className={classes.tab} >
            <StyledLink to="/questions" label={"Home"} />
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.tab}>
            <StyledLink to="/add" label={"New Question"} bgColor={"black"}/>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.tab}  >
            <StyledLink to="/leaderboard" label={"Leaderboard"} bgColor={"black"}/>
          </Typography>
          <Typography variant="h6" color="inherit"  className={classes.login}>
            <span style={{marginRight: "10px"}}> Welcome <strong>{props.loggedInStatus}</strong> </span>
            <span onClick={props.handleLogOut} className={classes.signOut}>SignOut</span>
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
