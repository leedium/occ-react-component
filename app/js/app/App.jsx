/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow
/**
 * @project occ-react-component
 * @file App.jsx
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 21/10/2018
 * @description  Sample ReactApplication.. knock urself out from here...
 */

import { hot } from 'react-hot-loader/root';

import React from "react";

import css from "./styles/styles.css";
import logo from "./images/logo.png";
import { Button, RadiusButton, ButtonType } from "./modules/Button/Button";

type Props = {
  occDependencies: {},
  model: {}
}

const App = (props: Props) => {
  // Including logs for example
  const { model, occDependencies } = props;
  const { logger } = occDependencies;
  logger.info("[occ-react-component]: Hello from OCC's Winston logger... :) ");
  console.log(`[occ-react-component]:  widget model:`, model);
  console.log(`[occ-react-component]:  application defined dependencies:`, occDependencies);

  return (
    <React.Fragment>
      <div className={css["occ-react-component"]}>
        <h4>I LOVE ORACLE</h4>
        <h4>This is React with HMR!!!!</h4>
        <div className={css.example}>
          <div><img className={css.logo} src={logo} alt="LEEDIUM LOGO"/></div>
          <div className={css["oracle-logo"]}/>
        </div>
        <div className={css.example}>
          <Button label="Default" {...props} />
          <Button buttonType={ButtonType.primary} label="Primary Button" {...props} />
          <Button buttonType={ButtonType.secondary} label="Secondary Button" {...props} />
        </div>
        <div>
          <RadiusButton radius="50px" buttonType={ButtonType.primary} label="Radius Button"/>
        </div>
      </div>
    </React.Fragment>

  );

};

export default hot(App);
