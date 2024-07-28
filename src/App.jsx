"use client";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [pics, setPics] = useState([]);
  const [img, setimg] = useState([]);

  const api = async () => {
    const rough = await axios.get("https://dog.ceo/api/breeds/image/random");
    const real = rough.data;
    setPics(real.message);
    setimg(real.status);
  };

  return (
    <div>
      {/* <h2>npm i axios install </h2> */}
      <button className="button" onClick={api}>
        click
      </button>
      <div className="main">
        <img src={pics} alt="image" className="img" />
        <h1 className="success">{img}</h1>
      </div>
    </div>
  );
};

export default App;
