export default function Stats({ items }) {
  const numItims = items.length;
  const numPaxked = items.filter((itam) => itam.packed).length;
  const percentage = Math.round((numPaxked / numItims) * 100);
  if (!items.length) {
    return <p className="stats">Start adding some list to your packing list</p>;
  }
  return (
    <footer className="stats">
      <p>
        {percentage === 100
          ? "you got everything!Ready to go "
          : `you have ${numItims} items on your list , and you already packed
          ${numPaxked}
          ,(${percentage}%)`}
      </p>
    </footer>
  );
}
