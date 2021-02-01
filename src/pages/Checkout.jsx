import React from "react";
import { tokenRequest } from "../api/requests";
import Picture from "../components/Picture/Picture";
import "./Checkout.css";

function Checkout(props) {
  return (
    <>
      <h2 className="name-menu">Корзина</h2>
      <Picture
        photos={props.checkout}
        handleFavoriteClick={props.handleFavoriteClick}
        handleCheckoutClick={props.handleCheckoutClick}
      />
      <button
        onClick={() => {
          tokenRequest();
        }}
        className="button-buy"
        value="BUY"
      >BUY
      </button>
    </>
  );
}

export default Checkout;