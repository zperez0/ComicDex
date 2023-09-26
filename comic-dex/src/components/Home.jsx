import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>🛠️ComicDex🛠️</h1>
      <Link to="/comics">
        <button>View Comics</button>
      </Link>
    </>
  );
}
