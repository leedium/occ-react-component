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


import React from "react";
import styled from "styled-components";

type Props = {
  itemData: {},
  handleClick: Function
}

const StyledSkuThumb = styled.button`

  div,
  img {
    display: block;
  }
  
  border: 0;
  outline: 0;
  
  
`;

const SkuThumb = ({ itemData, handleClick }: Props) => <StyledSkuThumb onClick={() => handleClick(itemData)}>
  <img src={itemData.primaryThumbImageURL || '/ccstore/v1/images/?source=/img/no-image.jpg&height=100&width=100' } alt={`${itemData.displayName} - ${itemData.repositoryId}`}/>
  <p>{itemData.listPrice}</p>
</StyledSkuThumb>;

export default SkuThumb;
