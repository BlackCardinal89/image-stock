import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import group_to_row from "../assets/group_to_row.png";
import group_to_square from "../assets/group_to_square.png";
import group_to_row_disable from "../assets/group_to_row-disable.png";
import group_to_square_disable from "../assets/group_to_square-disable.png";
import "./Content.css";

export default class Content extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="sort-by">
          <button
            onClick={() => {
              this.props.toggleGrid(false);
            }}
          >
            <Link to="#">
              {this.props.isGrid ? (
                <img src={group_to_row_disable} alt="" />
              ) : (
                <img src={group_to_row} alt="" />
              )}
            </Link>
          </button>
          <button
            onClick={() => {
              this.props.toggleGrid(true);
            }}
          >
            <Link to="#">
              {this.props.isGrid ? (
                <img src={group_to_square} alt="" />
              ) : (
                <img src={group_to_square_disable} alt="" />
              )}
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
