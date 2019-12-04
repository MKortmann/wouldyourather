import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MKLogo from '../icons/mk.svg';

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

export default function DenseAppBar() {
  const classes = useStyles();

  // const [isAuth, setIsAuth] = useState(false);

  let  componentToRender = (
      <React.Fragment>
        <Typography variant="h6" color="inherit" className={classes.tab} >
          Welcome to Would You Rather
        </Typography>
      </React.Fragment>
    )
  //
  // useEffect(()=> {
  //   console.log(`[Logged.js]: use effect run`);
    //
    // if ( localStorage.getItem("authUser") !== null) {
    //   setIsAuth(true);
    //   console.log("app bar setted true");
    // } else {
    //   setIsAuth(false);
    //   console.log("app bar setted false");
    // }
    // componentToRender = (
    //     <React.Fragment>
    //       <Typography variant="h6" color="inherit" className={classes.tab} >
    //         Home
    //       </Typography>
    //       <Typography variant="h6" color="inherit" className={classes.tab}>
    //         New Question
    //       </Typography>
    //       <Typography variant="h6" color="inherit" className={classes.tab}  >
    //         Leaderboard
    //       </Typography>
    //       <Typography variant="h6" color="inherit"  className={classes.login}>
    //         <span>SignOut</span>
    //       </Typography>
    //     </React.Fragment>
    //   )
  // })



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
