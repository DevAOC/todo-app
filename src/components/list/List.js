import { Button } from '@blueprintjs/core';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { SettingsContext } from '../../context/settings.js';

import ListItem from '../listItem/ListItem.js';

export default function List(props) {
  const settings = useContext(SettingsContext);

  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function toggleComplete(id) {
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
    const end = currentPage * settings.itemsPerPage;
    return props.list.slice(end - settings.itemsPerPage, end);
    // .filter(item => item.difficulty !== settings.difficulty).sort(item => (a, b) => )
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      {pagination().map((item, idx) => (
        <ListItem item={item} idx={idx} toggleComplete={toggleComplete} />
      ))}
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </>
  );
}
