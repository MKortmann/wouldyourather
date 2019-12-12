import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { _getUsers } from "../_DATA";

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
  // to debug: state saved in select
  const [users, setUsers] = useState([]);
  // to debug: state saved in select
  const [user, setUser] = useState([]);
  // const [user, setUser] = useState("");
  const [open, setOpen] = useState(false);

  // getting the users
  useEffect( () => {
    _getUsers()
    .then(res => {
      // Object.keys create an array that contains the properties of an object.
      const tempUsers = Object.keys(res);
      setUsers(tempUsers)
      }
    )
  }, [])

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
        <InputLabel id="demo-controlled-open-select-label">Select User</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.authUser}
          onChange={e =>{ // saving the user data of this user to local storage
                      localStorage.setItem("selectedUser", JSON.stringify(e.target.value))
                      setUser(e.target.value)}}
          value={user}
        >
        {users.map((user, index) => {
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
