import React from "react";
import { routes } from "../constants/routes";
import { Route, Switch } from "react-router";
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
      <Switch>
        <Route path={routes}>
          <input className="button-buy" type="button" value="BUY" />
        </Route>
      </Switch>
    </>
  );
}

export default Checkout;
