export default function RenderList({ item, idx, toggleComplete }) {
  return (
    <div key={idx}>
      <p>{item.text}</p>
      <p>
        <small>Assigned to: {item.assignee}</small>
      </p>
      <p>
        <small>Difficulty: {item.difficulty}</small>
      </p>
      {item.complete ? (
        <button onClick={() => toggleComplete(item.id)}>Complete</button>
      ) : (
        <button onClick={() => toggleComplete(item.id)}>Pending</button>
      )}
      <hr />
    </div>
  );
}
