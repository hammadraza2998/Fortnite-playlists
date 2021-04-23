import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ShopItem({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.com/v1/playlists/${match.params.id}`
    );
    const item = await data.json();
    console.log("Fetching Items >>>>", item.data);
  };

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default ShopItem;
