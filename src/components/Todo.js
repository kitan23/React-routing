import React, { useEffect } from "react";
import { useState } from "react";

export default function Todo() {
  const localData = localStorage.getItem("items");
  const [item, setItem] = useState("");
  const [items, setItems] = useState(localData ? JSON.parse(localData) : []);

  const handleSubmit = (e) => {
    const list = [...items];
    const newItem = { id: Math.random(), value: item };
    list.push(newItem);
    setItems(list);
    setItem("");
    e.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const deleteTask = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div className="todo">
      <div className="input">
        <form className="my-form" onSubmit={item ? handleSubmit : null}>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Add a task"
            className="form-input"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <ul className="list">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.value}</p>
              <button onClick={() => deleteTask(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <button className="clear" onClick={() => setItems([])}>
        Clear all
      </button>
    </div>
  );
}
