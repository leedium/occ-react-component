/* eslint no-unused-expressions:0 */

import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render } from "enzyme";
import { expect as chaiExpect } from "chai";
import SkuThumb from "./SkuThumb";

/**
 * Returns working mock data for tests
 * @returns {{dummySkuData: {productFamily: null, dynamicPropertyMapLong: {"sku-Shoe_x_shoeColor": number, "sku-Shoe_x_shoeSize": number}, primaryThumbImageURL: string, bundleLinks: Array, largeImage: null, smallImage: null, listVolumePrice: null, nonreturnable: boolean, displayName: string, salePrices: {eur: null, defaultPriceGroup: null}, primaryFullImageURL: string, listPrices: {eur: null, defaultPriceGroup: null}, productListingSku: boolean, largeImageURLs: string[], x_shoeColor: string, productLine: null, listVolumePrices: {eur: null, defaultPriceGroup: null}, primaryLargeImageURL: string, x_shoeSize: string, smallImageURLs: string[], model: null, thumbnailImage: null, barcode: null, saleVolumePrices: {eur: null, defaultPriceGroup: null}, salePriceEndDate: null, saleVolumePrice: null, salePriceStartDate: null, images: *[], quantity: null, unitOfMeasure: null, salePrice: null, primaryMediumImageURL: string, fullImageURLs: string[], dynamicPropertyMapBigString: {}, active: boolean, thumbImageURLs: string[], mediumImageURLs: string[], repositoryId: string, primarySourceImageURL: string, primarySmallImageURL: string, sourceImageURLs: string[], listPrice: number, configurable: boolean}}}
 */
function setup() {
  const dummySkuData = {
    productFamily: null,
    dynamicPropertyMapLong: {
      "sku-Shoe_x_shoeColor": 0,
      "sku-Shoe_x_shoeSize": 15
    },
    primaryThumbImageURL:
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=100&width=100",
    bundleLinks: [],
    largeImage: null,
    smallImage: null,
    listVolumePrice: null,
    nonreturnable: false,
    displayName: "AIR FORCE 1 '07 LV8 UTILITY - Sneakers low - Volt",
    salePrices: { defaultPriceGroup: null, eur: null },
    primaryFullImageURL:
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png",
    listPrices: { defaultPriceGroup: null, eur: null },
    productListingSku: true,
    largeImageURLs: [
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=940&width=940",
      "/ccstore/v1/images/?source=/file/v4141818052489286227/products/ni115o003.M11-quarter.jpg&height=940&width=940",
      "/ccstore/v1/images/?source=/file/v5187887212731856998/products/ni115o003.M11-quarterZoom.jpg&height=940&width=940",
      "/ccstore/v1/images/?source=/file/v575517743828600826/products/ni115o003.M11-back.png&height=940&width=940",
      "/ccstore/v1/images/?source=/file/v2457367087732607684/products/ni115o003.M11-bottom.jpg&height=940&width=940"
    ],
    x_shoeColor: "Volt",
    productLine: null,
    listVolumePrices: { defaultPriceGroup: null, eur: null },
    primaryLargeImageURL:
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=940&width=940",
    x_shoeSize: "46",
    smallImageURLs: [
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=300&width=300",
      "/ccstore/v1/images/?source=/file/v4141818052489286227/products/ni115o003.M11-quarter.jpg&height=300&width=300",
      "/ccstore/v1/images/?source=/file/v5187887212731856998/products/ni115o003.M11-quarterZoom.jpg&height=300&width=300",
      "/ccstore/v1/images/?source=/file/v575517743828600826/products/ni115o003.M11-back.png&height=300&width=300",
      "/ccstore/v1/images/?source=/file/v2457367087732607684/products/ni115o003.M11-bottom.jpg&height=300&width=300"
    ],
    model: null,
    thumbnailImage: null,
    barcode: null,
    saleVolumePrices: { defaultPriceGroup: null, eur: null },
    salePriceEndDate: null,
    saleVolumePrice: null,
    salePriceStartDate: null,
    images: [
      {
        path: "/products/ni115o003.M11-heroLeft.png",
        metadata: {},
        repositoryId: "m10027",
        name: "ni115o003.M11-heroLeft.png",
        url:
          "https://ccstore-z4ma.oracleoutsourcing.com/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png",
        tags: []
      },
      {
        path: "/products/ni115o003.M11-quarter.jpg",
        metadata: {},
        repositoryId: "m10028",
        name: "ni115o003.M11-quarter.jpg",
        url:
          "https://ccstore-z4ma.oracleoutsourcing.com/file/v4141818052489286227/products/ni115o003.M11-quarter.jpg",
        tags: []
      },
      {
        path: "/products/ni115o003.M11-quarterZoom.jpg",
        metadata: {},
        repositoryId: "m10029",
        name: "ni115o003.M11-quarterZoom.jpg",
        url:
          "https://ccstore-z4ma.oracleoutsourcing.com/file/v5187887212731856998/products/ni115o003.M11-quarterZoom.jpg",
        tags: []
      },
      {
        path: "/products/ni115o003.M11-back.png",
        metadata: {},
        repositoryId: "m10035",
        name: "ni115o003.M11-back.png",
        url:
          "https://ccstore-z4ma.oracleoutsourcing.com/file/v575517743828600826/products/ni115o003.M11-back.png",
        tags: []
      },
      {
        path: "/products/ni115o003.M11-bottom.jpg",
        metadata: {},
        repositoryId: "m10026",
        name: "ni115o003.M11-bottom.jpg",
        url:
          "https://ccstore-z4ma.oracleoutsourcing.com/file/v2457367087732607684/products/ni115o003.M11-bottom.jpg",
        tags: []
      }
    ],
    quantity: null,
    unitOfMeasure: null,
    salePrice: null,
    primaryMediumImageURL:
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=475&width=475",
    fullImageURLs: [
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png",
      "/ccstore/v1/images/?source=/file/v4141818052489286227/products/ni115o003.M11-quarter.jpg",
      "/ccstore/v1/images/?source=/file/v5187887212731856998/products/ni115o003.M11-quarterZoom.jpg",
      "/ccstore/v1/images/?source=/file/v575517743828600826/products/ni115o003.M11-back.png",
      "/ccstore/v1/images/?source=/file/v2457367087732607684/products/ni115o003.M11-bottom.jpg"
    ],
    dynamicPropertyMapBigString: {},
    active: true,
    thumbImageURLs: [
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=100&width=100",
      "/ccstore/v1/images/?source=/file/v4141818052489286227/products/ni115o003.M11-quarter.jpg&height=100&width=100",
      "/ccstore/v1/images/?source=/file/v5187887212731856998/products/ni115o003.M11-quarterZoom.jpg&height=100&width=100",
      "/ccstore/v1/images/?source=/file/v575517743828600826/products/ni115o003.M11-back.png&height=100&width=100",
      "/ccstore/v1/images/?source=/file/v2457367087732607684/products/ni115o003.M11-bottom.jpg&height=100&width=100"
    ],
    mediumImageURLs: [
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=475&width=475",
      "/ccstore/v1/images/?source=/file/v4141818052489286227/products/ni115o003.M11-quarter.jpg&height=475&width=475",
      "/ccstore/v1/images/?source=/file/v5187887212731856998/products/ni115o003.M11-quarterZoom.jpg&height=475&width=475",
      "/ccstore/v1/images/?source=/file/v575517743828600826/products/ni115o003.M11-back.png&height=475&width=475",
      "/ccstore/v1/images/?source=/file/v2457367087732607684/products/ni115o003.M11-bottom.jpg&height=475&width=475"
    ],
    repositoryId: "NI115O003-M11-46",
    primarySourceImageURL:
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=300&width=300",
    primarySmallImageURL:
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=300&width=300",
    sourceImageURLs: [
      "/ccstore/v1/images/?source=/file/v3675309913098592948/products/ni115o003.M11-heroLeft.png&height=300&width=300",
      "/ccstore/v1/images/?source=/file/v4141818052489286227/products/ni115o003.M11-quarter.jpg&height=300&width=300",
      "/ccstore/v1/images/?source=/file/v5187887212731856998/products/ni115o003.M11-quarterZoom.jpg&height=300&width=300",
      "/ccstore/v1/images/?source=/file/v575517743828600826/products/ni115o003.M11-back.png&height=300&width=300",
      "/ccstore/v1/images/?source=/file/v2457367087732607684/products/ni115o003.M11-bottom.jpg&height=300&width=300"
    ],
    listPrice: 109.95,
    configurable: false
  };

  return {
    dummySkuData
  };
}

// Snapshot test
it("renderer correctly", () => {
  const { dummySkuData } = setup();
  const tree = renderer
    .create(
      <SkuThumb
        handleClick={e => e}
        key={dummySkuData.repositoryId}
        {...dummySkuData}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();

  // test the click
  expect(tree).toMatchSnapshot();
});

// Shallow Test for Image and ListPrice type
it("Should have an Image and a list price", () => {
  const { dummySkuData } = setup();
  const { primaryFullImageURL } = dummySkuData;
  const wrapper = shallow(
    <SkuThumb
      key={dummySkuData.repositoryId}
      {...dummySkuData}
      handleClick={e => e}
    />
  );
  // has one image
  chaiExpect(wrapper.find("img")).to.have.length(1);
  chaiExpect(wrapper.find("p")).to.have.length(1);
  chaiExpect(parseFloat(wrapper.find("p").text())).to.not.be.NaN;
});
