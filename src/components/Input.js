import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
  display: 'flex',
  flexWrap: 'wrap',
  margin: "15px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },

}));

export default function Input(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TextField
        onChange={e => props.inputText(e.target.value, props.elem)}
        id={props.label}
        label={props.label}
        style={{ margin: 4 }}
        placeholder={props.label}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}

      />
    </div>
  );
}
