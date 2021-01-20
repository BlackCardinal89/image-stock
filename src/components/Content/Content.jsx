<<<<<<< HEAD
import React, { PureComponent } from "react";
import group_to_row from "../assets/group_to_row.png";
import group_to_square from "../assets/group_to_square.png";
import group_to_row_disable from "../assets/group_to_row-disable.png";
import group_to_square_disable from "../assets/group_to_square-disable.png";
import "./Content.css";

export default class Content extends PureComponent {
  state = {
    isGrid: false,
  };
=======
import React, { PureComponent } from 'react';
import group_to_row from '../assets/group_to_row.png';
import group_to_square from '../assets/group_to_square.png';
import "./Content.css";


export default class Content extends PureComponent {
>>>>>>> 263c24ba60d1f2493cc84389b8f7aa5d0d3b7237
  render() {
    return (
      <div className="container">
        <div className="sort-by">
<<<<<<< HEAD
          <button
            onClick={() => {
              this.setState({
                isGrid: false,
              });
            }}
          >
            <a href="#">
              {this.state.isGrid ? (
                <img src={group_to_row_disable} alt="" />
              ) : (
                <img src={group_to_row} alt="" />
              )}
            </a>
          </button>
          <button
            onClick={() => {
              this.setState({
                isGrid: true,
              })
            }}
          >
            <a href="#">
              {this.state.isGrid ? (
                <img src={group_to_square} alt="" />
              ) : (
                <img src={group_to_square_disable} alt="" />
              )}
            </a>
          </button>
        </div>
=======
          <button>
            <img src={group_to_row} alt=""/>
          </button>
          <button>
            <img src={group_to_square} alt=""/>
          </button>
        </div>
        <div className="unsplash-photo">
          
        </div>
>>>>>>> 263c24ba60d1f2493cc84389b8f7aa5d0d3b7237
      </div>
    );
  }
}
