import React, { PureComponent } from 'react';
import favorite_24px from '../assets/favorite_24px.png';
import unsplash from '../assets/unsplash.png';
import history_24px from '../assets/history_24px.png';
import './Header.css';

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <div className="icon-box">
          <div className="component-logo">
            <button className="btn-icons">
              <img src={unsplash} alt="" />
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
          <form action="">
            <input
              className="input-search"
              type="text"
              placeholder="Поиск"
            />
          </form>
        </div>
        <div className="btn-sentence">
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
          </ul>
        </div>
      </header>
    );
  }
}
