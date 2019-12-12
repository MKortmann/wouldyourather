import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({

  header: {
    color: "red"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();

  // const [user, setUser] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <div>
      <h3>
        <p>Please, select a user to <em className={classes.header}>LOGIN</em> or click <em className={classes.header}>SIGNUP</em></p>
      </h3>
      <FormControl className={classes.formControl}>
        <InputLabel id="openSelectLabel">Select User</InputLabel>
        <Select
          labelId="openSelectLabelId"
          id="openSelectLabel"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={ e => {props.checkIn(e.target.value)
                          setValue(e.target.value)}}
          value={ value }
        >
        {Object.keys(props.users).map((user, index) => {
          return (
            <MenuItem key={index} value={user}>
              {user}
            </MenuItem>
          )
        })}
        </Select>
      </FormControl>
    </div>
  );
}
