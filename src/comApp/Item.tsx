import React from "react";
interface Items {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}
interface ItemProps {
  itam: Items;
  handleDeletItems: (id: number) => void;
  handleToggleItems: (id: number) => void;
}

export default function Item({
  itam,
  handleDeletItems,
  handleToggleItems,
}: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        value={String(itam.packed)}
        onChange={() => handleToggleItems(itam.id)}
      />
      <p className="spano">
        <span
          style={
            itam.quantity > 9
              ? { backgroundColor: "gold", padding: "0 5px", color: "#e5771f" }
              : {}
          }
        >
          {itam.quantity}
        </span>
        <span style={itam.packed ? { textDecoration: "line-through" } : {}}>
          {itam.description}
        </span>
      </p>
      <button
        onClick={() => handleDeletItems(itam.id)}
        style={itam.quantity > 9 ? { color: "#e5771f" } : {}}
      >
        X
      </button>
    </li>
  );
}
