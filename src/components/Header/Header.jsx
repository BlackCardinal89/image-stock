import React from "react";
import "unsplash-js";
import logo from "../assets/logo.png";
import favorite_24px from "../assets/favorite_24px.png";
import shopping_cart from "../assets/shopping_cart-64.png";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { routes } from "../../constants/routes";

function Header(props) {
  const premadeQueries = [
    "Wallpapers",
    "Nature",
    "People",
    "Architecture",
    "Current Events",
    "Business & Work",
    "Experimental",
    "Fashion",
    "Film",
    "Health & Wellness",
    "Interiors",
    "Street Photography",
    "Technology",
    "Travel",
    "Textures & Patterns",
    "Animals",
    "Food & Drink",
    "Athletics",
    "Spirituality",
    "Arts & Culture",
    "History",
    "View all",
  ];

  return (
    <header className="component-header">
      <div className="flex-icon">
        <div className="icon-box">
          <div className="component-logo">
            <Link
              to={routes.home}
              className="btn-icons"
              style={{ textDecoration: "none" }}
            >
              <img src={logo} alt="" />
              <h2 className="header-name">Image Stock</h2>
            </Link>
          </div>
          <div className="component-icons">
            <Link
              to={routes.favorites}
              className="btn-icons"
              style={{ textDecoration: "none" }}
            >
              <img src={favorite_24px} alt="" />
              <h4 className="header-name">Избранное</h4>
            </Link>
            <Link
              to={routes.checkout}
              className="btn-icons"
              style={{ textDecoration: "none" }}
            >
              <img src={shopping_cart} alt="" />
              <h4 className="header-name">Корзина</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="btn-search">
        <form className="form" onSubmit={props.searchPhotos}>
          <label className="label" htmlFor="query">
            {" "}
          </label>
          <input
            className="input-search"
            name="query"
            type="text"
            placeholder="Поиск"
            value={props.query}
            onChange={(e) => props.assignQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="scrolling-wrapper">
        <ul>
          {premadeQueries.map((query, i) => {
            return (
              <li key={i}>
                <button onClick={(e) => props.searchPhotos(e, query)}>
                  {query}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
