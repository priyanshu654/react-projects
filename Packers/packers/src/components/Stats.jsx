export default function Stats({ formData }) {
  if (formData.length == 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const itemLength = formData.length;
  const packedItems = formData.filter((el) => el.packed).length;
  const percentage = Math.round((packedItems / itemLength) * 100);

  return (
    <p className="stats">
      <em>
        {percentage == 100
          ? `You got everything! Ready to go ✈️`
          : `💼 You have ${itemLength} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </p>
  );
}
