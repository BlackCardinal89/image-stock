import React, { PureComponent } from 'react';
import group_to_row from '../assets/group_to_row.png';
import group_to_square from '../assets/group_to_square.png';
import "./Content.css";


export default class Content extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="sort-by">
          <button>
            <img src={group_to_row} alt=""/>
          </button>
          <button>
            <img src={group_to_square} alt=""/>
          </button>
        </div>
        <div className="unsplash-photo">
          
        </div>
      </div>
    );
  }
}
