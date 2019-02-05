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


import React, {Component, Fragment } from "react";
import { hot } from "react-hot-loader/root";

import Product from "./modules/Product/Product";
import ProductList from "./modules/ProductList/ProductList";

type Props = {
  occDependencies: {},
  model: {}
}

const Functional = ({name}) => {
  return <div>Hello {name} Welcome to React </div>
};

const App = (props: Props): Function => {
  const { model, occDependencies } = props;
  console.log(`[occ-react-component]:  widget model:`, model);
  console.log(`[occ-react-component]:  application defined dependencies:`, occDependencies);
  return (
    <Fragment>
      <ProductList title="This is a product listing">
      <Product key="ni115o003" productId="ni115o003" {...props} />
      <Product key="mars_snickers" productId="mars_snickers" {...props} />
      </ProductList>
    </Fragment>
  );
};

export default hot(App);
