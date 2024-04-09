import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState("1");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; //في حال ارسل وهو فارغ

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    handleAddItems(newItem);
    setdescription("");
    setquantity("1");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setquantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* {Array.from({ length: 20 }, (_, i) => i + 1)احفضها فقط من اجل تكوين اري من ارقام */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
