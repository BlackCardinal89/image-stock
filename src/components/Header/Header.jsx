import React from "react";
import "unsplash-js";
import logo from "../assets/logo.png";
import favorite_24px from "../assets/favorite_24px.png";
import shopping_cart from "../assets/shopping_cart.png";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { routes } from "../../constants/routes";

export default function Header(props) {
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
          <button>
            <li>Wallpapers</li>
          </button>
          <button>
            <li>Nature</li>
          </button>
          <button>
            <li>People</li>
          </button>
          <button>
            <li>Architecture</li>
          </button>
          <button>
            <li>Current Events</li>
          </button>
          <button>
            <li>Experimental</li>
          </button>
          <button>
            <li>Fashion</li>
          </button>
          <button>
            <li>Film</li>
          </button>
          <button>
            <li>Health & Wellness</li>
          </button>
          <button>
            <li>Interiors</li>
          </button>
          <button>
            <li>Street Photography</li>
          </button>
          <button>
            <li>Technology</li>
          </button>
          <button>
            <li>Travel</li>
          </button>
          <button>
            <li>Textures & Patterns</li>
          </button>
          <button>
            <li>Business & Work</li>
          </button>
          <button>
            <li>Animals</li>
          </button>
          <button>
            <li>Food & Drink</li>
          </button>
          <button>
            <li>Athletics</li>
          </button>
          <button>
            <li>Spirituality</li>
          </button>
          <button>
            <li>Arts & Culture</li>
          </button>
          <button>
            <li>History</li>
          </button>
          <button>
            <li>View all</li>
          </button>
        </ul>
      </div>
    </header>
  );
}

// const premadeQueries = ["History", "Art", "Basketball", "Tennis", "People"];

// {
//   premadeQueries.map((query, i) => {
//     return (
//       <button onClick={(e) => searchByQuery(query)} key={i}>
//         <li>{query}</li>
//       </button>
//     );
//   });
// }
