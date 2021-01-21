import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import Picture from "./components/Picture/Picture.jsx";
import "./App.css";

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
        perPage: 50,
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
      <Content 
        isGrid={isGrid} 
        toggleGrid={toggleGrid} 
      />
      <Picture 
        isGrid={isGrid} 
        photos={photos}
      />
    </div>
  );
}

export default App;
