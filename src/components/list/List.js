import { useEffect, useState, useContext } from 'react';
import { SettingsContext } from '../../context/settings.js';

import ListItem from '../listItem/ListItem.js';

export default function List(props) {
  const settings = useContext(SettingsContext);

  const [incomplete, setIncomplete] = useState([]);
  const [paginationEnd, setPaginationEnd] = useState(settings.pagination);

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

  const pagination = () => {
    const start = paginationEnd - settings.pagination;
    return props.list.slice(start, paginationEnd);
    // .filter(item => item.difficulty !== settings.difficulty).sort(item => (a, b) => )
  };

  const handleNext = (e) => {
    e.preventDefault();
    setPaginationEnd(paginationEnd + settings.pagination);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setPaginationEnd(paginationEnd - settings.pagination);
  };

  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      {pagination().map((item, idx) => (
        <ListItem item={item} idx={idx} toggleComplete={toggleComplete} />
      ))}
    </>
  );
}
