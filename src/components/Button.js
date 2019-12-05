import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { styled } from '@material-ui/core/styles';

function button (props) {
  // onClick={props.clicked}

  const MyButton = styled(Button)({
    background: props.bgColor,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: props.color,
    height: 36,
    "&:hover": {
      background: "rgba(255, 105, 135, .5)",
    },
    margin: "5px",
    marginBottom: "20px"
  });

  return (
    <React.Fragment>
      <MyButton  onClick={props.clicked} variant="contained" >
        {props.label}
      </MyButton>
    </React.Fragment>
  );
}

export default button;
