import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import Form from './components/form/Form.js';
import Settings from './components/settings/Settings.js';
import List from './components/list/List.js';

import { SettingsContext } from './context/settings.js';
import Login from './components/auth/Login.js';
import IsAuthorized from './components/auth/IsAuthorized.js';

export default function App() {
  const settings = useContext(SettingsContext);
  const [list, setList] = useState([]);

  async function addItem(item) {
    item.id = uuid();
    item.complete = false;
    try {
      const res = await axios.post('/api', item);
      setList([...list, res]);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function deleteItem(id) {
    try {
      await axios.delete('/api', id);
      const items = list.reduce((item) => item.id !== id);
      setList(items);
    } catch (error) {}
  }

  return (
    <>
      <Login />
      <IsAuthorized capability="read">
        <Form addItem={addItem} />
        <Settings />
        <List list={settings.hide ? list.filter((item) => !item.complete) : list} setList={setList} />
      </IsAuthorized>
    </>
  );
}
