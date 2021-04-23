import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Shop() {
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch("https://fortnite-api.com/v1/playlists");
    const items = await data.json();
    console.log("Fortnine Banners >>>> ", items.data);
    setItems(items.data);
  };

  const [items, setItems] = useState([]);

  return (
    <div>
      <h1>Shop</h1>
      {items.map((item) => (
        <div key={item.id}>
          <span>{`Playlist-${items.indexOf(item) + 1}`}</span>
          <Link to={`/shop/${item.id}`}>
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Shop;
