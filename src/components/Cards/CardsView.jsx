import React from "react";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard";
const USID = require("usid");
const usid = new USID();

export default function CardsView(props) {
 
  return (
    <ul className="products-module">
      {props.products.map((product) => {
        return (
          <li key={usid.rand()} className="products-list-item">
            <ShopCard item={product} />
          </li>
        );
      })}
    </ul>
  );
}

CardsView.propTypes = {
  products: PropTypes.array.isRequired,
};
