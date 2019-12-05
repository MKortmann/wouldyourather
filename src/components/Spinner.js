import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    flexGrow: 1,
    transform: 'translateZ(0)',
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{minWidth: "30%", color: 'rgba(0,212,255,0.8)'}}/>
    </div>
  );
}
