import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=5");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      {items.map((item) => (
        <h3 key={item.id}>
          <Link style={{ color: "black" }} to={`/shop/${item.id}`}>
            {item.title}
          </Link>
        </h3>
      ))}
    </div>
  );
}

export default Shop;
