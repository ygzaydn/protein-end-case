import React from "react";
import { Text, Button } from "..";

const AccountOfferItem = ({ item }) => {
  console.log(item);
  return (
    <div className="accountproductitem">
      <div className="accountproductitem__imagediv">
        <img
          className="accountproductitem__imagediv--image"
          src={"https://bootcamp.akbolat.net" + item.image.url}
        />
      </div>
      <div className="accountproductitem__contentdiv">
        <div>
          <Text
            color="dark"
            fontWeight="medium"
            classes="accountproductitem__contentdiv--title"
          >
            <h2>{item.name}</h2>
          </Text>
        </div>
      </div>
      <div className="accountproductitem__buttondiv">
        {!item.isSold && (
          <Button
            classes="accountproductitem__buttondiv--button"
            color="primary"
            size="xsmall"
          >
            <Text fontWeight="light">
              <h5>Satın Al</h5>
            </Text>
          </Button>
        )}
      </div>
    </div>
  );
};

export default AccountOfferItem;
