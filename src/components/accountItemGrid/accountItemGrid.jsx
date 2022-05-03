import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AccountProductItem, Text, AccountOfferItem } from "../";
import _ from "lodash";

const AccountItemGrid = ({ option, nullText, userInfo, data }) => {
  const parseOfferArray = () => {
    let filteredData = [];
    let res = [];
    data.forEach((el) => {
      const data = {
        offerId: el.id,
        offerPrice: el.offerPrice,
        isStatus: el.isStatus,
        ...el.product,
      };
      filteredData.push(data);
    });
    filteredData = filteredData.filter((el) => el.id).reverse();
    res = _.uniqBy(filteredData, "id");

    return res;
  };

  const len =
    option === "products"
      ? userInfo[option]?.length
      : parseOfferArray(data).length;

  return (
    <div className="accountitemgrid">
      {len ? (
        <div>
          {option === "products"
            ? data.map((el) => <AccountProductItem item={el} key={el.id} />)
            : parseOfferArray(data).map((el) => (
                <AccountOfferItem item={el} key={el.id} />
              ))}
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
