import React from "react";

import products from "../db/dataProducts";
import CardsView from "./Cards/CardsView";
import ListView from "./List/ListView";
import IconSwith from "./IconSwith";

export default class Store extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      menuIcon: "view_list",
      storeView: "list",
    };
    this.onSwithhandler = this.onSwithhandler.bind(this);
  }

  onSwithhandler(e) {
    let icon = e.target.textContent;
    let view;
    icon === "view_list" ? (icon = "view_module") : (icon = "view_list");
    icon === "view_list" ? (view = "list") : (view = "module");
    console.log("icon", icon);
    this.setState({ menuIcon: icon, storeView: view });
  }

  render() {
    return (
      <div className={"store-container"}>
        <IconSwith
          icon={this.state.menuIcon}
          onSwithhandler={this.onSwithhandler}
        />
        {this.state.storeView === "list" ? (
          <ListView products={products} />
        ) : (
          <CardsView products={products} />
        )}
      </div>
    );
  }
}
