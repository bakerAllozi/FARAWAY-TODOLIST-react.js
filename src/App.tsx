import { useState } from "react";
import React from "react";

import Logo from "./comApp/Logo.tsx";
import Stats from "./comApp/Stats.tsx";
import Form from "./comApp/Form.tsx";
import PackingList from "./comApp/PackingList.tsx";

export default function App() {
  interface Item {
    description: string;
    quantity: number;
    packed: boolean;
    id: number;
  }
  const [items, setItems] = useState<Item[]>([]);
  function handleAddItems(item: Item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletItems(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItim() {
    const confirmed = window.confirm(
      "are you sure you want ti delet all istems?"
    );
    if (confirmed === true) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeletItems={handleDeletItems}
        handleToggleItems={handleToggleItems}
        clearItim={clearItim}
      />
      <Stats items={items} />
    </div>
  );
}
