import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import { Switch, Route } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import Checkout from "./pages/Checkout.jsx";
import { routes } from "./constants/routes.js";

function App() {
  const unsplash = createApi({
    accessKey: "BRJzDmpI4J9H8KTIX7NuwWdjuJb74DCDDv1vwcxqGLA",
  });

  const [query, setQuery] = useState("");
  const [isGrid, setIsGrid] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const data = await unsplash.photos.list();
    setPhotos(data.response.results);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const assignQuery = (query) => {
    setQuery(query);
  };

  const toggleGrid = (grid) => {
    setIsGrid(grid);
  };

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .getPhotos({
        query: query,
        perPage: 99,
      })
      .then((data) => {
        setPhotos(data.response?.results);
      });
  };

  return (
    <div>
      <Header
        photos={photos}
        searchPhotos={searchPhotos}
        query={query}
        assignQuery={assignQuery}
      />
      <Switch>
        <Route exact path={routes.home}>
          <Home isGrid={isGrid} toggleGrid={toggleGrid} photos={photos} />
        </Route>
        <Route path={routes.favorites}>
          <Favorites />
        </Route>
        <Route path={routes.checkout}>
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
