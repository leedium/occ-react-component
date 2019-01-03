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



import React, {Component, Fragment} from "react";
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

import Product from './modules/Product/Product';
import ProductList from './modules/ProductList/ProductList';



type Props = {
  occDependencies: {},
  model: {}
}

const Test =styled.div`
  color:red;
`

class App extends Component<Props> {
  componentDidUpdate (prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    console.log(prevProps, prevState, snapshot)
  }

  render(){
    const { model, occDependencies } = this.props;
    console.log(`[occ-react-component]:  widget model:`, model);
    console.log(`[occ-react-component]:  application defined dependencies:`, occDependencies);
    return (
      <Test>Hello</Test>

    );
  }
};

export default hot(App);
// export default App;
