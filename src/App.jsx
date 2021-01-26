import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import { Switch, Route } from "react-router-dom";
import { routes } from "./constants/routes.js";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Checkout from "./pages/Checkout.jsx";
import "./App.css";

function App() {
  const unsplash = createApi({
    accessKey: "BRJzDmpI4J9H8KTIX7NuwWdjuJb74DCDDv1vwcxqGLA",
  });

  const [query, setQuery] = useState("");
  const [isGrid, setIsGrid] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [checkout, setCheckout] = useState([]);

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

  const searchPhotos = async (e, buttonValue) => {
    e.preventDefault();
    unsplash.search
      .getPhotos({
        query: buttonValue ? buttonValue : query,
        perPage: 99,
      })
      .then((data) => {
        setPhotos(data.response?.results);
      });
  };

  const addToFavorites = (id) => {
    const targetPhoto = photos.find((photo) => photo.id === id);
    setFavorites([...favorites, targetPhoto]);
  };

  const deleteFromFavorites = (id) => {
    const favoritesWithoutTarget = favorites.filter((photo) => photo.id !== id);
    setFavorites(favoritesWithoutTarget)
  };

  const addToCart = (id) => {
    const targetPhoto = photos.find((photo) => photo.id === id);
    setCheckout([...checkout, targetPhoto])
  }

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
          <Home
            handleFavoriteClick={addToFavorites}
            isGrid={isGrid}
            toggleGrid={toggleGrid}
            photos={photos}
          />
        </Route>
        <Route path={routes.favorites}>
          <Favorites
            isGrid={isGrid}
            toggleGrid={toggleGrid}
            favorites={favorites}
            handleFavoriteClick={deleteFromFavorites}
          />
        </Route>
        <Route path={routes.checkout}>
          <Checkout 
            
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
