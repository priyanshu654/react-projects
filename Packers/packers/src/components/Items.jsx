export default function Items({ item, handleDelete, handleToggle }) {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleToggle(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => handleDelete(item.id)}>❌</button>
      </li>
    );
  }
  