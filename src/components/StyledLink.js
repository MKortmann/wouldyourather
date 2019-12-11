import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// stopped at class 72
const StyleLink = styled(Link)`
  background: rgba(13,186,240,0.8);
  border: 0;
  color: white;
  height: 48;
  padding: 10;
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  &:hover {
    background-color: rgba(255, 105, 135, .5);

  },
  `;

function StyledLink(props)  {

  return (
    <StyleLink to={props.to}>{props.label}</StyleLink>
  )
}

export default StyledLink;
