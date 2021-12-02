import { useEffect, useState } from 'react';

export default function List(props) {
  const [incomplete, setIncomplete] = useState([]);

  function toggleComplete(id) {
    const items = props.list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    props.setList(items);
  }

  useEffect(() => {
    const incompleteCount = props.list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [props.list]);

  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      {props.list.map((item) => (
        <div key={item.id}>
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
      ))}
    </>
  );
}
