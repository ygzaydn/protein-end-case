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
        <div>
          <Text
            color="dark"
            fontWeight="medium"
            classes="accountproductitem__contentdiv--title"
          >
            <h2>{item.name}</h2>
          </Text>
        </div>
        <div>
          {item.offers.length ? (
            "asd"
          ) : (
            <Text
              fontWeight="light"
              color="red"
              classes="accountproductitem__contentdiv--offer"
            >
              <h5>Üründe herhangi bir teklif yok</h5>
            </Text>
          )}
        </div>
      </div>
      <div className="accountproductitem__buttondiv">
        {!item.isSold && item.offers.length > 0 && (
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
        {!item.isSold && item.offers.length > 0 && (
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
