import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function ItemDetail(match) {
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      fetchItem();
      console.log(match);
    }
    return () => (isCancelled = true);
  }, []);

  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fakestoreapi.com/products/${match.match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <h2>${item.price}</h2>
      <h5>{item.description}</h5>
      <img className="photo" src={item.image} alt="#" />
    </div>
  );
}

export default ItemDetail;
