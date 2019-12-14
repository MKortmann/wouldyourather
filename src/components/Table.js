import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    margin: "auto",
    width: '80%',
    overflowX: 'none',
  },
  table: {
    minWidth: 600,
    maxWidh: 1080
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "rgba(255, 105, 135, .5)",
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  const [ rowsState, setRowState ] = useState([{ avatar: "avatar", name: "name", posted: "posted", answered: "answered",  points: "10"}]);

  useEffect( () => {

    const answered = {};
    const users = Object.keys(props.users);
    const questions = Object.values(props.questions);

    // let's get the number of answered question for each user. We add the
    // result in the object answered...
    users.forEach( (user, indexUser) => {
      questions.forEach( (question, indexQuestion) => {
        if (  ( questions[indexQuestion].optionOne.votes.indexOf(users[indexUser])  >= 0 ) ||
              ( questions[indexQuestion].optionTwo.votes.indexOf(users[indexUser]) >= 0 ) ) {
          answered[user] = (answered[user] || 0) + 1;
        }
      })
    })

    function createData(avatar, name, posted, answered, points) {
      return { avatar, name, posted, answered,  points};
    }

    let rows = [];
    const totalvalues = [];
    // here we create an array with the values that we want to render in the table
    users.forEach( (user, index) => {
      rows.push(createData("avatar", user, props.users[user].questions.length, answered[user], props.users[user].questions.length + answered[user]))
      // rows.push("avatar", user, props.users[user].questions.length, props.answered[user], props.users[user].questions.length + props.answered[user])
      totalvalues.push(props.users[user].questions.length + answered[user]);
    })

    const rowsSorted = [];
    // here we have to sort the values in accord with the size of the total points.
    if (rows.length > 0) {
      for ( let i = rows.length; i > 0; i--) {
        let index = totalvalues.indexOf(Math.max(...totalvalues));
        rowsSorted.push(rows[index]);
        rows.splice(index, 1);
        totalvalues.splice(index, 1);
      }
    }

    setRowState(rowsSorted);

  }, [ ])

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{props.head.avatar}</StyledTableCell>
            <StyledTableCell align="right">{props.head.user}</StyledTableCell>
            <StyledTableCell align="right">{props.head.posted}</StyledTableCell>
            <StyledTableCell align="right">{props.head.answered}</StyledTableCell>
            <StyledTableCell align="right">{props.head.points}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsState.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.avatar}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.posted}</StyledTableCell>
              <StyledTableCell align="right">{row.answered}</StyledTableCell>
              <StyledTableCell align="right">{row.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
