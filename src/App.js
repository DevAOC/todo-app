import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import Form from './components/form/Form.js';
import Settings from './components/settings/Settings.js';
import List from './components/list/List.js';

import { SettingsContext } from './context/settings.js';
import Login from './components/auth/Login.js';
import IsAuthorized from './components/auth/IsAuthorized.js';

export default function App() {
  const settings = useContext(SettingsContext);
  const [list, setList] = useState([]);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.reduce((item) => item.id !== id);
    setList(items);
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
