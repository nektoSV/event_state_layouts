import React from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";
const USID = require("usid");
const usid = new USID();

export default function ListView(props) {
 
  return (
    <ul className="products-list">
      {props.products.map((product) => {
        return (
          <li key={usid.rand()} className="products-list-item">
            <ShopItem item={product} />
          </li>
        );
      })}
    </ul>
  );
}

ListView.propTypes = {
  products: PropTypes.array.isRequired,
};
