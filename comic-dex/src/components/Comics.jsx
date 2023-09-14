import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

export default function Comics() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setComics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comics: ", error);
      });
  }, []);

  return (
    <>
      <h1>🛠️ComicDex🛠️</h1>
      <h2>Comics List</h2>
      {comics.map((comic) => (
        <div key={comic.id} className="post-container">
          <h3>{comic.title}</h3>
          <p>{comic.description}</p>
        </div>
      ))}
    </>
  );
}
