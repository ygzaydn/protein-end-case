import React from "react";
import { Text, Button } from "../";

const AccountProductItem = ({ item }) => {
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
        <div className="accountproductitem__contentdiv--title">
          <Text color="dark" fontWeight="medium">
            <h2>{item.name}</h2>
          </Text>
        </div>
        <div className="accountproductitem__contentdiv--offer">
          {item.offers.length ? "asd" : null}
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
              <h5>Onayla</h5>
            </Text>
          </Button>
        )}
        {!item.isSold && (
          <Button
            classes="accountproductitem__buttondiv--button"
            color="red"
            size="xsmall"
          >
            <Text fontWeight="light">
              <h5>Reddet</h5>
            </Text>
          </Button>
        )}
      </div>
    </div>
  );
};

export default AccountProductItem;
