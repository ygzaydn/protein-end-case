import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AccountProductItem, Text, AccountOfferItem } from "../";

const AccountItemGrid = ({ option, nullText, userInfo, data }) => {
  const filteredInput = [];

  option === "products" &&
    data.length > 0 &&
    data.map((el) =>
      el?.offers?.map((el2) => filteredInput.push({ ...el2, item: { ...el } }))
    );

  const len =
    option !== "products"
      ? userInfo[option]?.length > 0
      : filteredInput.length > 0;

  return (
    <div className="accountitemgrid">
      {len ? (
        <div>
          {option === "products"
            ? filteredInput.map((el) => (
                <AccountProductItem item={el} key={el.id} />
              ))
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
