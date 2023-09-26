import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Comics List</h1>
      <Link to="/">
        <button>Return Home</button>
      </Link>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            {comic.title} - Issue #{comic.issue_number}
          </li>
        ))}
      </ul>
    </div>
  );
}
