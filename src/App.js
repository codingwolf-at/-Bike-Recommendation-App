import React, { useState } from "react";
import "./styles.css";
import { bikeData } from "./Dataset";

export default function App() {
  let bikesList = [
    "All Bikes",
    "Street Naked Bikes",
    "Cruiser Bikes",
    "Sports Bikes",
    "Adventure Bikes"
  ]; // Object.keys(bikeData);
  console.log("bikesList", bikesList);
  const [bikeCategory, setBikeCategory] = useState("All Bikes");

  function getBikes(category) {
    setBikeCategory(category);
  }

  return (
    <div className="App">
      <h1>RIDE INDIA</h1>
      <h2>Best rated Bikes available in India</h2>
      <hr />
      <div className="bikeList">
        {bikesList.map((category) => {
          return (
            <button
              key={category}
              value={category}
              onClick={() => getBikes(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div>
        {bikeData[bikeCategory].map((bike) => {
          return (
            <div className="bike">
              <img alt="" className="bike-img" src={bike.img} />
              <div className="bike-info">
                <h1>{bike.name} </h1>
                <h4>Displacement : {bike.displacement}</h4>
                <h3>Price : {bike.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <footer>
        <h5>Made with <span className="red">love</span> and <span className="blue">passion</span> by <a href="https://codingwolf-at.github.io/">codingWolf</a></h5>
      </footer>
    </div>
  );
}
