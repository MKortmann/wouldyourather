import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MKLogo from '../icons/mk.svg';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  tab: {
    marginRight: theme.spacing(2),
    marginLeft: "20px",
    cursor: "pointer"
  },
  login: {
    flexGrow: 1,
    textAlign: "right",
    cursor: "pointer"
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <img src={MKLogo} alt="MK-Logo" />
          <Typography variant="h6" color="inherit" className={classes.tab} >
            Home
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.tab}>
            New Question
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.tab}  >
            Leaderboard
          </Typography>
          <Typography variant="h6" color="inherit"  className={classes.login}>
            Login
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
