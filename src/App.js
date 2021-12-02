import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Form from './components/form/Form.js';
import List from './components/list/List.js';

import { SettingsContext } from './context/settings.js';

export default function App() {
  const [list, setList] = useState([]);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  return (
    <>
      <Form addItem={addItem} />
      <SettingsContext.Consumer>
        {(settingsContext) => (
          <>
            <List list={settingsContext.hide ? list.filter((item) => !item.complete) : list} setList={setList} />
          </>
        )}
      </SettingsContext.Consumer>
    </>
  );
}
