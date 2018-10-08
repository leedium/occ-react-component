/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';

function OccProvider (WrappedComponent, occData) {
  return class extends Component {
    constructor (props, context) {
      super(props, context);
      console.log(occData);
    }
    render () {
      const {children} = this.props;
      return (
        <WrappedComponent {...occData}>
          {children}
        </WrappedComponent>
      )
    }
  }
}

export default OccProvider;

