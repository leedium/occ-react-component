/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */


// @flow

/**
 * @project occ-react-component
 * @file Button.jsx
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 21/10/2018
 * @description  Example of a React Component using Styled components
 */

import React from "react";
import styled from "styled-components";


type ButtonProps = {
  label: string,
  buttonType: string
}

type CircleButtonProps = {
  label: string,
  buttonType: string,
  radius: number;
}

export const ButtonType = {
  default: "blue",
  primary: "red",
  secondary: "yellow"
};

// Styles
const StyledButton = styled.button`
    background-color: ${props => props.buttonType || ButtonType.default};
    color: ${props => props.buttonType === ButtonType.secondary ? "black" : "white"}`;

// Extend the Styled Button Class
const RadiusCircleButton = styled(StyledButton)`
  border-radius: ${props => props.radius};
  padding: 50px;`;


// Default Button
export const Button = (props: ButtonProps) => {
  const { label } = props;
  return <StyledButton {...props}>{label}</StyledButton>;
};

// Circle Button
export const RadiusButton = (props: CircleButtonProps) => {
  const { label } = props;
  return (<RadiusCircleButton {...props}>{label}</RadiusCircleButton>);
};



