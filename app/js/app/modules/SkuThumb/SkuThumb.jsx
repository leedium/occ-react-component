/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

/**
 * @project occ-react-component
 * @file SkuThumb.jsx
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 21/10/2018
 * @description  Sku / Variant Button
 */


import React, { PureComponent } from "react";
import styled from "styled-components";

type Props = {
  repositoryId: string,
  displayName: string,
  primaryThumbImageURL: string,
  listPrice: string,
  handleClick: Function
}

export const StyledSkuThumb = styled.button`
  div,
  img {
    display: block;
  }
  
  border: 0;
  outline: 0;
`;

class SkuThumb extends PureComponent<Props> {
  render() {
    const { primaryThumbImageURL, listPrice, repositoryId, displayName, handleClick } = this.props;
    return (
      <StyledSkuThumb type="button" onClick={ (e)=>{handleClick(repositoryId)}} >
      <img src={primaryThumbImageURL}
           alt={`${displayName} - ${repositoryId}`}/>
      <p>{listPrice}</p>
    </StyledSkuThumb>
    );
  }
}

export default SkuThumb;
