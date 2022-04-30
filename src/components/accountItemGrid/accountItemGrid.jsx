import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Text from "../text/text";

const AccountItemGrid = ({ option, nullText, userInfo }) => {
  const len = userInfo[option].length;
  console.log(len);
  return (
    <div className="accountitemgrid">
      {len ? null : (
        <div className="accountitemgrid__nullText">
          <Text color="blue">
            <h2>{nullText}</h2>
          </Text>
        </div>
      )}
    </div>
  );
};

AccountItemGrid.propTypes = {
  option: PropTypes.string,
  nullText: PropTypes.string,
  userInfo: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userInfo: state.user.currentUser,
});

export default connect(mapStateToProps, null)(AccountItemGrid);
