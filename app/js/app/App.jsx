/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-component
 * @file App.jsx
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 21/10/2018
 * @description  Sample Application.. knock urself out from here...
**/


import React, {Component} from 'react';

class App extends Component {
  constructor (props, context){
    super(props,context);
    console.log('Props:',this.props);
  }
  render () {
    return (
      <div>This is an Application</div>
    )
  }
}

export default App;
