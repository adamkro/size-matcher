import React from "react";
import { Dropdown } from './Dropdown';
import { brandList } from '../data/brands'
import { productList } from '../data/products';

export const Filters = () => {
  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-2">
          <Dropdown filter="PRODUCT" options={productList} triggerText="product" />
        </div>
        <div className="col-2">
          <Dropdown filter="BRAND" options={brandList} triggerText="brand" />
        </div>
      </div>
    </div>
  );
};
