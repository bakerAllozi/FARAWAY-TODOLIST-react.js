import { useState } from "react";
import React from "react";
import Item from "./Item.tsx";

interface Items {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}
interface PackingListProps {
  items: Items[];
  handleDeletItems: (id: number) => void;
  handleToggleItems: (id: number) => void;
  clearItim: () => void;
}
export default function PackingList({
  items,
  handleDeletItems,
  handleToggleItems,
  clearItim,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState<string>("input");

  let sortedItems: Items[] = [];
  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  if (sortBy === "number") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.quantity) - Number(b.quantity));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((itam) => (
          <Item
            itam={itam}
            key={itam.id}
            handleDeletItems={handleDeletItems}
            handleToggleItems={handleToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="number">Sort by the number</option>
        </select>
        <button onClick={clearItim}>Clear list</button>
      </div>
    </div>
  );
}
