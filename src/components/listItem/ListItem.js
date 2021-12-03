import { Button } from '@blueprintjs/core';

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
        <Button intent="success" onClick={() => toggleComplete(item.id)}>
          Complete
        </Button>
      ) : (
        <Button intent="danger" onClick={() => toggleComplete(item.id)}>
          Pending
        </Button>
      )}
      <hr />
    </div>
  );
}
