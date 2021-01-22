import React from "react";
import "unsplash-js";
import favorite_24px from "../assets/favorite_24px.png";
import logo from "../assets/logo.png";
import history_24px from "../assets/history_24px.png";
import "./Header.css";


export default function Header(props) {
  
  return (
    <header className="component-header">
      <div className="flex-icon">
        <div className="icon-box">
          <div className="component-logo">
            <button className="btn-icons">
              <img src={logo} alt="" />
              <h2 className="header-name">Image Stock</h2>
            </button>
          </div>
          <div className="component-icons">
            <button 
              className="btn-icons"
              onClick={() => {
               
              }}          
            >
              <img src={favorite_24px} alt="" />
              <h4 className="header-name">Избранное</h4>
            </button>
            <button className="btn-icons">
              <img src={history_24px} alt="" />
              <h4 className="header-name">История поиска</h4>
            </button>
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
