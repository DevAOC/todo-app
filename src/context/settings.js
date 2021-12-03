import React, { useState } from 'react';

export const SettingsContext = React.createContext();

export default function Settings(props) {
  const [hide, setHide] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sort, setSort] = useState('none');

  return (
    <SettingsContext.Provider
      value={{
        hide,
        itemsPerPage,
        sort,
        setHide,
        setItemsPerPage,
        setSort,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}
