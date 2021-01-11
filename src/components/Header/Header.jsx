import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <div className="component-logo">
          {/* <i className="icon-logo"> */}
            <img src="../assets/unsplash.png" alt=""/>
          {/* </i> */}
        </div>
        <div className="component-icons">
          <i className="icon-logo">
            <img src="../assets/favorite_24px.png" alt=""/>
          </i>
          <i className="icon-logo">
            <img src="../assets/history_24px.png" alt=""/>
          </i>
        </div>
      </header>
    )
   }
}