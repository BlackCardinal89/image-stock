import React, { useEffect, useState } from "react";
import { tokenRequest, transferToPaymentPage } from "../api/requests";
import Picture from "../components/Picture/Picture";
import "./Checkout.css";

function Checkout(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://test-epay.homebank.kz/payform/payment-api.js";
    script.async = true;

    document.body.appendChild(script);
  });
  const handleBuyClick = async (amountPayable) => {
    await transferToPaymentPage(amountPayable);
  };

  useEffect(() => {
    let amount = props.checkout.length * 490;
    setAmount(amount);
  }, [props.checkout]);

  const [amount, setAmount] = useState(0);

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
          handleBuyClick(amount);
        }}
        className="button-buy"
        value="BUY"
      >
        BUY
      </button>
    </>
  );
}

export default Checkout;
