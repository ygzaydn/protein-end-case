import React from "react";
import PropTypes from "prop-types";

import { Loading } from "../../icons";

const Loader = ({ open }) => {
  return (
    <div className={open ? "dialogbox dialogbox--open" : "dialogbox"}>
      <div className="dialogbox__content dialogbox__loader">
        <Loading />
      </div>
    </div>
  );
};

Loader.propTypes = {
  open: PropTypes.bool,
};

export default Loader;
