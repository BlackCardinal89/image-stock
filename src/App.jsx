import './App.css';
import React, { PureComponent } from 'react';
import Header from './components/Header/Header.jsx'

export default class App extends PureComponent { 
    
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}