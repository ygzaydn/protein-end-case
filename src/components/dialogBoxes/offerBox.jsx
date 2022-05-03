import React from "react";

import PropTypes from "prop-types";
import { Checked, Unchecked } from "../../icons";
import { Text } from "../";

const Offerbox = ({ active, setFunc, amount }) => {
  return (
    <div
      className={active ? "offerbox--active" : "offerbox"}
      onClick={() => setFunc(`${amount}%`)}
    >
      {active ? <Checked /> : <Unchecked />}
      <Text
        fontWeight="light"
        classes={active ? "offerbox__text--active" : "offerbox__text"}
      >
        <h4>%{amount} Kadar Teklif Ver</h4>
      </Text>
    </div>
  );
};

Offerbox.propTypes = {
  active: PropTypes.bool,
  setFunc: PropTypes.func,
  amount: PropTypes.number,
};

export default Offerbox;
