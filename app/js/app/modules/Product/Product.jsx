/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";

import utils from "../../helpers/utils";
import SkuThumb from "../SkuThumb/SkuThumb";

type Props = {
  productId: string,
  occModel: {},
  occDependencies: {}
}

type State = {
  productData: {}
}


// Styled Component
const StyledProduct = styled.div`
  &:before,
  &:after {
    content: " ";
    display:table;
  }
  &:after {
    clear: both;
  }
  
  ul {
    padding: 0;
  }

  h2 {
      color: darkgrey !important;
       font-size: 25px !important;
  };
    
  .product {
    &__hero-img {
      display: inline-block;
      float: left;
      margin: 10px;
    }
    
    &__details {
      display: inline-block;
      width: 50%;
      float: left;
      margin: 10px;
    }
    
    &__skus {
      display: block;
      float: left
    }
  }
`;

class Product extends PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    // HMR does not like the babel transform-class-properties plugin so need to do this
    this.state = {
      productData: null
    };

    this.skuSelected = this.skuSelected.bind(this);
  }

  componentDidMount(): void {
    const { occDependencies, productId } = this.props;
    const { ccRestClient, ccConstants } = occDependencies;
    ccRestClient.request(ccConstants.ENDPOINT_PRODUCTS_GET_PRODUCT, null, (data) => {
      this.setState({
        productData: data
      });
    }, () => {
    }, productId);
  }

  skuSelected(id){
    console.log('props:',this.props);
    console.log('state:',this.state);
    console.log('Id selected:',id);
    return id;
  }

  render() {
    const { productData } = this.state;
    if (productData) {
      const { displayName, longDescription, smallImageURLs, childSKUs } = productData;
      return (
        <StyledProduct>
          <h2 className="product__title">{displayName}</h2>
          <img className="product__hero-img" src={smallImageURLs[0]} alt=""/>
          <div className="product__details">
            <p dangerouslySetInnerHTML={utils.createMarkup(longDescription)}/>
            <ul className="product__skus">
              {childSKUs.map(item =>
                <SkuThumb key={item.repositoryId}
                          {...item}
                          handleClick={this.skuSelected}/>)}
            </ul>
          </div>
        </StyledProduct>
      );
    }
    return null;
  }
}

export default Product;
