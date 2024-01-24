import React from "react";
import PropTypes from "prop-types";

export default function IconSwith(props) {
  //const {icon, onSwithhandler} = props;

  return (
    <div className="icon-menu__wrap">
      <span className="material-icons" onClick={props.onSwithhandler}>
        {props.icon}
      </span>
    </div>
  );
}
IconSwith.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwithhandler: PropTypes.func.isRequired,
};
