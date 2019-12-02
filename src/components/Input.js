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

        // onChange={props.onChange}
        // value={props.value}

  return (
    <div className={classes.container}>
      <TextField
        id="standard-full-width"
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
