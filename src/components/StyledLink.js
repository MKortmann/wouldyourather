import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// stopped at class 72
const StyleLink = styled(Link)`
  background: rgba(0,212,255,0.6);
  border: 0;
  color: black;
  height: 48;
  padding: 10;
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  &:hover {
    background-color: rgba(255, 105, 135, .5);
    color: white
  },
  `;


function StyledLink(props)  {
  return (
    <StyleLink to={props.to}>{props.label}</StyleLink>
  )
}

export default StyledLink;
