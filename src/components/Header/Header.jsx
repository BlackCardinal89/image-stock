import React, { useState } from 'react';
import favorite_24px from '../assets/favorite_24px.png';
import logo from '../assets/logo.png';
import history_24px from '../assets/history_24px.png';
import './Header.css';


export default function Header() {

  const [query, setQuery] = useState("");


    return (
      <header className="component-header">
        <div className="icon-box">
          <div className="component-logo">
            <button className="btn-icons">
              <img src={logo} alt="" />
            </button>
          </div>
          <div className="component-icons">
            <button className="btn-icons">
              <img src={favorite_24px} alt="" />
            </button>
            <button className="btn-icons">
              <img src={history_24px} alt="" />
            </button>
          </div>
        </div>
        <div className="btn-search">
          <form className="form">
            <input
              className="input-search"
              type="text"
              placeholder="Поиск"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="scrolling-wrapper">
          <ul>
            <button>
              <li>Wallpapers</li>
            </button>
            <button>
              <li>Textures</li>
            </button>
            <button>
              <li>Patterns</li>
            </button>
            <button>
              <li>Background</li>
            </button>
            <button>
              <li>Health</li>
            </button>
            <button>
              <li>Street photo</li>
            </button>
            <button>
              <li>Travel</li>
            </button>
            <button>
              <li>Animals</li>
            </button>
            <button>
              <li>Art & Culture</li>
            </button>
            <button>
              <li>History</li>
            </button>
          </ul>
        </div>
      </header>
    );
  }

