import React, { PureComponent } from 'react';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import './App.css';
// import { createApi } from 'unsplash-js';

function App() {

  // const unsplash = createApi({
  //   accessKey: 'MY_ACCESS_KEY',
  //   fetch: nodeFetch,
  // })
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default App