//المشروع يفيد في حال اردة انشاء مشروع يضيف شى الى الواجهة الامامية عن طريق المستخدم بشكل داينميكي
import { useState } from "react";
import "./App.js";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
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
