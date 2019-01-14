/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

/**
 * @project occ-react-component
 * @file ProductList.jsx
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 21/10/2018
 * @description  Displays a list of products
 */


import React, { PureComponent } from "react";
import styled from "styled-components";

type Props = {
  title: string,
  children: []
}

const StyledProductList = styled.div`
   h2 {
    // text-decoration: underline !important;
    // color: green !important;
    font-size: 20px !important;
    
   }
  .list-container
      display: flex;
    }
`;

class ProductList extends PureComponent<Props> {
  render () {
    const { children, title } = this.props;
    return (
      <StyledProductList>
        <h2>{title}</h2>
        <div className="list-container">{children}</div>
      </StyledProductList>);
  }
}

export default ProductList;
