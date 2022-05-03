import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AccountProductItem, Text, AccountOfferItem } from "../";

const AccountItemGrid = ({ option, nullText, userInfo, data }) => {
  const len = userInfo[option]?.length;
  //console.log(userInfo[option]);
  return (
    <div className="accountitemgrid">
      {len ? (
        <div>
          {option === "products"
            ? data.map((el) => <AccountProductItem item={el} key={el.id} />)
            : data.map((el) => <AccountOfferItem item={el} key={el.id} />)}
        </div>
      ) : (
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
  data: PropTypes.array,
};

const mapStateToProps = (state) => ({
  userInfo: state.user.currentUser,
});

export default connect(mapStateToProps, null)(AccountItemGrid);
