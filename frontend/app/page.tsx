"use client";
import { useEffect, useState } from "react";
import { handleTodoItems } from "./hooks";
import "./styles.scss";
import Item from "./todo-item";

export default function Home() {


  const { items, fetchItems, addItem, deleteItem, toggleItem } = handleTodoItems();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <input type="text" placeholder="Add a new todo..."/> 
      <button>Add Todo </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
